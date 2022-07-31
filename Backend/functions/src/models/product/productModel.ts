import { Product } from "../../interfaces/exportInterfaces"
import admin from "firebase-admin"
const fireStore = admin.firestore();
class Products {

  getProduct = () => {

  }
  getProductById = (id: number) => {

  }
  createProduct = async (Product: Product) => {

    await fireStore.collection('products').doc().set(Product);

    return (Product)
  }
  updateProduct = () => {

  }
  deleteProduct = () => {

  }
}

export const product = new Products();
