import express from 'express'

const router = express.Router()

// TODO: Serve assets from the client folder

router.use('*', async (req, res) => {
  // TODO: Render some HTML, with the correct URL
})

export default router
