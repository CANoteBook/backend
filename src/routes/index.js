import express from 'express'

const router = express.Router()

router.get('/', (request, response) => {
    response.json({ data: 'Hello, World!' }).status(200)
})

export default router