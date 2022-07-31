import { User } from '../../interfaces/exportInterfaces'
import admin from "firebase-admin"
import { v4 as idGenerator } from 'uuid'

const fireStore = admin.firestore()
class Users {

  getUser = async () => {
    const collection = fireStore.collection('products')

    const products = (await collection.get())
      .docs
      .map(product => product.data())

    return products
  }
  getUserById = (id: string) => {

  }
  createUser = async (User: User) => {
    User.id = idGenerator()
    await fireStore.collection('products').doc().set(User);

    return (User)
  }
  updateUser = () => {

  }
  deleteUser = () => {

  }
}

export const user = new Users();
