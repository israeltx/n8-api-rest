import express from 'express'

const PORT = 3333

const app = express()

app.get('/products/:id', (request, response) => {
  const {id} = request.params
  response.send(id)
})

app.listen(PORT, () => console.log('server is on'))