import { userDatabase } from '../../database/exportDatabase'
class User {

  getUser = () => {
    return userDatabase.getuser()
  }
  getUserById = (id: number) => {
    return userDatabase.getUserById(id)
  }
  postUser = () => {
    return userDatabase.postUser()
  }
  updateUser = () => {
    return userDatabase.updateUser()
  }
  deleteUser = () => {
    return userDatabase.deleteUser()
  }
}

export const user = new User();
