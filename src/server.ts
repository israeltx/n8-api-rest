import express from 'express'
import { myMiddleware } from './middlewares/my-middleware'

const PORT = 3333

const app = express()
app.use(express.json())
// Global middleware
// app.use(myMiddleware)

app.get('/products', (request, response) => {
  const {page, limit} = request.query
  response.send(`${page} ${limit}`)
})

// Local middleware
app.post('/products', myMiddleware, (request, response) => {
  const {name, price} = request.body
  // response.send(`${name} ${price}`)
  response.status(201).json({name, price, user_id: request.user_id})
})

app.listen(PORT, () => console.log('server is on'))