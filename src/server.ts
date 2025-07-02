import express from 'express'

const PORT = 3333

const app = express()

app.get('/products', (request, response) => {
  const {page, limit} = request.query
  response.send(`${page} ${limit}`)
})

app.listen(PORT, () => console.log('server is on'))