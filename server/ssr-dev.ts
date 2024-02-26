import express from 'express'
import { promises as fs } from 'fs'
import { createServer, createViteRuntime } from 'vite'
import { z } from 'zod'

// App type changed to 'custom' to support SSR
const vite = await createServer({
  server: { middlewareMode: true },
  appType: 'custom',
})

// Handles HMR and SSR
const runtime = await createViteRuntime(vite)

// Ensure type safety for the server entry module
const ServerEntry = z.object({
  render: z.function().args(z.string()).returns(z.promise(z.string())),
})
type ServerEntry = z.infer<typeof ServerEntry>

async function loadModule(modulePath: string): Promise<ServerEntry> {
  const mod = await runtime.executeEntrypoint(modulePath)
  if (!ServerEntry.safeParse(mod).success) {
    throw new Error('Server entry module should have a `render` function.')
  }
  return mod
}

const router = express.Router()

router.use(vite.middlewares)

// SPA fallback
router.use('*', async (req, res, next) => {
  const url = req.originalUrl
  try {
    let template = await fs.readFile('index.html', 'utf-8')
    template = await vite.transformIndexHtml(url, template)
    const { render } = await loadModule('server/entry-server.tsx')

    // URL passed to render function for router
    const rendered = await render(url)
    const html = template.replace(
      `<div id="root"></div>`,
      `<div id="root">${rendered}</div>`,
    )
    res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
  } catch (e: any) {
    vite.ssrFixStacktrace(e)
    next(e)
  }
})

export default router
