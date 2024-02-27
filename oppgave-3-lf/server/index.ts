import express from 'express'
import ssr from './ssr'

const port = process.env.PORT || 3000

const app = express()

app.get('/api/data', (_, res) => {
  res.json({ data: 'Some server data!' })
})

app.use(ssr)

app.listen(port, () => {
  console.log('Server running at http://localhost:' + port)
})
