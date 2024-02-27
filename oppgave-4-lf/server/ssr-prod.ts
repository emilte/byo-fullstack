import express from 'express'
import * as fs from 'fs'
import sirv from 'sirv'

const router = express.Router()

// Serve assets from the client folder
router.use(sirv('client', { extensions: [] }))

// Cache the index.html file
const template = fs.readFileSync('./client/index.html', 'utf-8')

router.use('*', async (req, res) => {
  const url = req.originalUrl
  const { render } = await import('./entry-server.tsx')

  // URL passed to render function for router
  const rendered = await render(url)
  const html = template.replace(
    `<div id="root"></div>`,
    `<div id="root">${rendered}</div>`,
  )
  res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
})

export default router
