import { Product } from "../../interfaces/exportInterfaces"
import admin from "firebase-admin"
import { v4 as idGenerator } from 'uuid'

const fireStore = admin.firestore()
class Products {
  getProduct = async () => {
    const collection = fireStore.collection('products')

    const products = (await collection.get())
      .docs
      .map(product => product.data())

    return products
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
    await fireStore.collection('products').doc().set(Product);

    return (Product)
  }
  deleteProduct = async (id: string) => {
    await fireStore
      .collection('products')
      .doc(id)
      .delete();
  }
  updateProduct = async (id: string, product: Product) => {

  }
}

export const product = new Products();
