import express from 'express'
import { promises as fs } from 'fs'
import { createServer, createViteRuntime } from 'vite'

// App type changed to 'custom' to support SSR
const vite = await createServer({
  server: { middlewareMode: true },
  appType: 'custom',
})

// Handles HMR and SSR
const runtime = await createViteRuntime(vite)

const app = express.Router()

app.use(vite.middlewares)

// SPA fallback
app.use('*', async (req, res, next) => {
  const url = req.originalUrl
  try {
    let template = await fs.readFile('index.html', 'utf-8')
    template = await vite.transformIndexHtml(url, template)
    const { render } = await runtime.executeEntrypoint(
      'server/entry-server.tsx',
    )

    // TODO: Maybe the render function needs to know where you are?
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

export default app
