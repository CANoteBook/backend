import express from 'express'
const router = express.Router()

router.get('/', (request, response) => {
    console.log('/')
})

export default router