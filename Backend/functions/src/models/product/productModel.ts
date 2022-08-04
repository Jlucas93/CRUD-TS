import { Product } from "../../interfaces/exportInterfaces"
import admin from "firebase-admin"

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
      .doc(name)
      .get()

    return Product
  },
  async getProductById(id: string) {
    const Product = await fireStore
      .collection('products')
      .doc(id)
      .get()
    if (product) {

      return Product.data()
    }
    return false
  },
  async createProduct(Product: Product) {
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
