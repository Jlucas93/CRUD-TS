import { Router } from 'express';
import productController from '../controllers/product/productController'

const ProductRoute = Router()

ProductRoute.get('/', productController.getProduct)
ProductRoute.get('/:id', productController.getProductById)
ProductRoute.post('/', productController.createProduct)
ProductRoute.put('/', productController.updateProduct)
ProductRoute.delete('/:id', productController.deleteProduct)


export default ProductRoute