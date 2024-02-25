import express from 'express'
import fs from 'fs/promises'
import { createServer, createViteRuntime } from 'vite'
import z from 'zod'

const port = process.env.PORT || 3000

const app = express()

app.get('/api/data', (_, res) => {
  res.json({ data: 'Some server data!' })
})

const vite = await createServer({
  server: { middlewareMode: true },
  appType: 'custom',
})

const runtime = await createViteRuntime(vite)

const ServerEntry = z.object({
  render: z.function().returns(z.promise(z.string())),
})
type ServerEntry = z.infer<typeof ServerEntry>

async function loadModule(modulePath: string): Promise<ServerEntry> {
  const mod = await runtime.executeEntrypoint(modulePath)
  if (!ServerEntry.safeParse(mod).success) {
    throw new Error('Server entry module should have a `render` function.')
  }
  return mod
}

app.use(vite.middlewares)

app.use('*', async (req, res, next) => {
  const url = req.originalUrl
  try {
    let template = await fs.readFile('index.html', 'utf-8')
    template = await vite.transformIndexHtml(url, template)
    const { render } = await loadModule('./src/entry-server.tsx')
    const rendered = await render()
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

app.listen(port, () => {
  console.log('Server running at http://localhost:' + port)
})
