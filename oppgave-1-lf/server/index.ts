import express from 'express'
import { createServer } from 'vite'

const port = process.env.PORT || 3000

const app = express()

app.get('/api/data', (_, res) => {
  res.json({ data: 'Some server data!' })
})

const vite = await createServer({
  server: { middlewareMode: true },
  appType: 'spa',
})

app.use(vite.middlewares)

app.listen(port, () => {
  console.log('Server running at http://localhost:' + port)
})
