import { Request, Response } from "express"
import { AppError } from "../utils/AppError"
import { z } from "zod"

class ProductController {
 index(request:Request, response:Response) {
  const {page, limit} = request.query
  response.send(`Página ${page} de ${limit}`)
 }

 create(request:Request, response:Response) {
   
  const bodySchema = z.object({
    name: z.string({required_error: 'Name is required'}),
    price: z.number({required_error: 'Price is required'})
  })
  
  const {name, price} = bodySchema.parse(request.body)

  // if (!name) {
  //   throw new AppError('O nome do produto é obrigatório')
  // }

  // if (!price) {
  //   throw new AppError('O preço do produto é obrigatório')
  // }

  // throw new Error('Exemplo de erro')
  // throw new AppError('Erro ao tentar criar um produto')

  response.status(201).json({name, price, user_id: request.user_id})
 }
}

export {ProductController}