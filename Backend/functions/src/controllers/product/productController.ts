import { product } from '../../models/exportModels'
import * as express from "express"

const ProductController = {

  getProduct: (req: express.Request, res: express.Response) => {
    res.status(200).json('Rota get funcionando')
  },
  getProductById: (req: express.Request, res: express.Response) => {
    const { id } = req.params
    const productId = product.getProductById(Number(id))
    return res.status(200).json(productId)
  },
  createProduct: async (req: express.Request, res: express.Response) => {
    const { name, price, description } = req.body
    try {
      const newproduct = {
        name,
        price,
        description
      }
      const newProduct = await product.createProduct(newproduct)

      return res.status(201).json({ newProduct })

    } catch (error) {
      return res.status(500).json({ error: error, message: "erro" })
    }
  },
  updateProduct: (req: express.Request, res: express.Response) => {
    const productPut = product.updateProduct()
    res.status(200).json(productPut)
  },
  deleteProduct: (req: express.Request, res: express.Response) => {
    const productDelete = product.deleteProduct()
    res.status(200).json(productDelete)
  }
}

export default ProductController
