import express from 'express'
import { createServer } from 'vite'

const port = process.env.PORT || 3000

const app = express()

const vite = await createServer({
  server: { middlewareMode: true },
  appType: 'spa',
})

app.get('/api/data', (_, res) => {
  res.json({ data: 'Some server data!' })
})

app.use(vite.middlewares)
// TODO: Create a Vite server and use the middleware in the Express app
// Hint: Use the `vite` package to create a Vite server. Also, you need an entry point for the React app.

app.listen(port, () => {
  console.log('Server running at http://localhost:' + port)
})
