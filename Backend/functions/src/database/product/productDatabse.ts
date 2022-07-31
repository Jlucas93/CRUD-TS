import { Product } from "../../interfaces/exportInterfaces"
import admin from "firebase-admin"

const fireStore = admin.firestore();

class ProductDatabase {

    getProduct = (): Product => {
        const product: Product = {
            id: '1',
            name: 'celular',
            price: 1000,
            description: "Iphone GET"
        }
        return (product);
    }
    getProductById = (id: number) => {
        const product: Product = {
            id: '1',
            name: 'celular',
            price: 1000,
            description: "Iphone 4"
        }
        return product
    }
    createProduct = async (Product: Product) => {

        const product = await fireStore.collection('products').doc().set(Product);

        return ('Produto criado' + product)
    }
    updateProduct = () => {
        const product: Product = {
            id: '1',
            name: 'celular',
            price: 1000,
            description: "Iphone PUT"
        }
        return product
    }
    deleteProduct = () => {
        const product: Product = {
            id: '1',
            name: 'celular',
            price: 1000,
            description: "Iphone DELETE"
        }
        return product
    }
}

export const productDatabase = new ProductDatabase();
