import express from 'express'
import { routes } from './routes'
import { Request, Response, NextFunction } from "express";


const PORT = 3333

const app = express()
app.use(express.json())
app.use(routes)
// Exceptions treatment
app.use((error:any, request:Request, response:Response, _:NextFunction) => {
  response.status(500).json(
    {
      message: "Erro no servidor"
    }
  )
})
app.listen(PORT, () => console.log('server is on'))