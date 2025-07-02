import { Router } from "express";
import { myMiddleware } from "../middlewares/my-middleware";
import { ProductController } from "../controllers/ProductController";

const productsRoutes = Router()
const productController = new ProductController()

productsRoutes.get('/', productController.index)

productsRoutes.post('/', myMiddleware, productController.create)

export {productsRoutes}