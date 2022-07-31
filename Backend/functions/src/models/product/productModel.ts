import { Product } from "../../interfaces/exportInterfaces"
import admin from "firebase-admin"
import { v4 as idGenerator } from 'uuid'

const fireStore = admin.firestore()
class Products {
  getProduct = async () => {
    const collection = fireStore.collection('products')

    const products = await collection
      .get()
      .then(data => (
        data.docs.map(product => ({
          id: product.id,
          ...product.data()
        }))
      ))
    return products
  }
  getByName = async (name: string) => {
    const Product = await fireStore
      .collection('products')
      .where('name', "==", name)
      .get()

    return Product
  }
  getProductById = async (id: string) => {
    const Product = await fireStore
      .collection('products')
      .doc(id)
      .get()

    return Product.data()
  }
  createProduct = async (Product: Product) => {
    Product.id = idGenerator()
    await fireStore
      .collection('products')
      .doc()
      .set(Product);

    return (Product)
  }
  updateProduct = async (id: string, Product: Product) => {
    const product = await fireStore
      .collection('products')
      .doc(id)
      .set(Product)

    return product
  }
  deleteProduct = async (id: string) => {
    await fireStore
      .collection('products')
      .doc(id)
      .delete();
  }
}

export const product = new Products();
