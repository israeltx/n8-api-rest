import { Request, Response } from "express"
import { AppError } from "../utils/AppError"

class ProductController {
 index(request:Request, response:Response) {
  const {page, limit} = request.query
  response.send(`Página ${page} de ${limit}`)
 }

 create(request:Request, response:Response) {
  const {name, price} = request.body

  if (!name || !price) {
    throw new AppError('O nome do produto e preço são obrigatórios')
  }

  // throw new Error('Exemplo de erro')
  // throw new AppError('Erro ao tentar criar um produto')

  response.status(201).json({name, price, user_id: request.user_id})
 }
}

export {ProductController}