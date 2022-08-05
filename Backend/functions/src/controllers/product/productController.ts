import { product } from '../../models/exportModels'
import * as express from "express"

const ProductController = {

  getProduct: async (_req: express.Request, res: express.Response) => {
    try {
      const products = await product.getProduct()

      return res.status(200).json({ products })
    } catch (err) {

      return res.status(500).json({ error: err, message: 'Error to get products' });
    }
  },
  getProductById: async (req: express.Request, res: express.Response) => {
    const { id } = req.params
    try {
      const Product = await product.getProductById(id)
      if (Product) {
        return res.status(200).json({ Product })
      } else {
        return res.status(500).json({ message: 'Product not found' })
      }
    } catch (error) {
      return res.status(400).json({ error: error, message: "error" })
    }
  },
  createProduct: async (req: express.Request, res: express.Response) => {
    const { name, price, description } = req.body

    const verify = await product.getByName(name)
    console.log(verify)

      try {
        const newproduct = {
          name,
          price,
          description
        }
        const newProduct = await product.createProduct(newproduct)
  
        return res.status(201).json({ newProduct })
  
      } catch (error) {
        return res.status(400).json({ error: error.toString(), message: "error" })
      }
    
  },
  updateProduct: async (req: express.Request, res: express.Response) => {
    const { id } = req.params
    const {
      name,
      price,
      description } = req.body
    try {
      const Product = {
        name,
        price,
        description
      }
      await product.updateProduct(id, Product)

      return res.status(200).json({ Product })
    } catch (error) {
      return res.status(400).json({ error: error, message: "error" })
    }
  },
  deleteProduct: async (req: express.Request, res: express.Response) => {
    const { id } = req.params
    try {
      await product.deleteProduct(id)
      return res.status(200).json({ message: "Product Deleted" })
    } catch (error) {
      return res.status(400).json({ error: error, message: "error" })
    }
  }
}

export default ProductController
