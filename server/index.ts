import express from 'express'

const port = process.env.PORT || 3000

const app = express()

app.get('/api/data', (_, res) => {
  res.json({ data: 'Some server data!' })
})

const ssr =
  process.env.NODE_ENV === 'production'
    ? (await import('./ssr-prod')).default
    : (await import('./ssr-dev')).default

app.use(ssr)

app.listen(port, () => {
  console.log('Server running at http://localhost:' + port)
})
