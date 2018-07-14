import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import http from 'http'
import app from '../index'

dotenv.config()
const port = normalizePort(process.env.PORT || '3000')
const server = http.createServer(app)

app.set('port', port)
app.use(bodyParser.json())

server.listen(port)

server.on('error', () => {
  if (error.syscall !== 'listen'){ throw error }
  let bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges')
      process.exit(1)
      break
    case 'EADDRINUSE':
      console.error(bind + ' is already in use')
      process.exit(1)
      break
    default:
      throw error
  }
})

server.on('listening', () => {
  let addr = server.address()
  let bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port
  console.log(`Listening on ${ bind }`)
})

function normalizePort(val) {
  let port = parseInt(val, 10)
  if (isNaN(port)){ return val }
  if (port >= 0){ return port }
  return false
}