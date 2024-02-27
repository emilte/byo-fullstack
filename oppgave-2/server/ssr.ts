import express from 'express'
import { createServer } from 'vite'

// TODO: Maybe something must change here?
const vite = await createServer({
  server: { middlewareMode: true },
  appType: 'spa',
})

const app = express.Router()

app.use(vite.middlewares)

// SPA fallback
app.use('*', async (req, res, next) => {
  // TODO serve some HTML
})

export default app
