import express from 'express'
import config from './config'

import emailRouter from './routes/email'
import clientRouter from './routes/client'
import cors from 'cors'

const app = express()
app.use(express.json()) // middleware -> transform req.body to json
app.use(cors())

app.get('/ping', (_req, res) => {
  res.send('pong')
})

app.use('/api/email', emailRouter)
app.use('/api/client', clientRouter)

const server = app.listen(config.port, () => {
  console.log('-----------------------')
  console.log('------- SERVER --------')
  console.log('-----------------------')

  console.log(`http://${String(config.host)}:${String(config.port)}/api/`)
})

export { app, server }
