import express from 'express'
import logger from 'morgan'
import bodyParser from 'body-parser'
import cookieParser from "cookie-parser"

import index from './routes/index'

const app = express()

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(cookieParser())

app.use('/', index)

export default app