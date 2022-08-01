import { Product } from "../../interfaces/exportInterfaces"
import admin from "firebase-admin"
import { v4 as idGenerator } from 'uuid'

const fireStore = admin.firestore()
export const product = {
  async getProduct() {
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
  },
  async getByName(name: string) {
    const Product = await fireStore
      .collection('products')
      .where('name', "==", name)
      .get()

    return Product
  },
  async getProductById(id: string) {
    const Product = await fireStore
      .collection('products')
      .doc(id)
      .get()

    return Product.data()
  },
  async createProduct(Product: Product) {
    Product.id = idGenerator()
    await fireStore
      .collection('products')
      .doc()
      .set(Product);

    return (Product)
  },
  async updateProduct(id: string, Product: Product) {
    const product = await fireStore
      .collection('products')
      .doc(id)
      .set(Product)

    return product
  },
  async deleteProduct(id: string) {
    await fireStore
      .collection('products')
      .doc(id)
      .delete();
  }
}
