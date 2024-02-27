import express from 'express'

const port = process.env.PORT || 3000

const app = express()

app.get('/api/data', (_, res) => {
  res.json({ data: 'Some server data!' })
})

// TODO: Create a Vite server and use the middleware in the Express app
// Hint: Use the `vite` package to create a Vite server. Also, you need an entry point for the React app.

app.listen(port, () => {
  console.log('Server running at http://localhost:' + port)
})
