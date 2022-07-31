import { user } from '../../models/exportModels'
import * as express from "express"

const UserController = {

  getuser: (req: express.Request, res: express.Response) => {
    const userGet = user.getUser()
    res.status(200).json(userGet)
  },
  getUserById: (req: express.Request, res: express.Response) => {
    const { id } = req.params
    const userId = user.getUserById(id)
    return res.status(200).json(userId)
  },
  createUser: async (req: express.Request, res: express.Response) => {
    const { name, lastName, email, password } = req.body
    const newUser = {
      name,
      lastName,
      email,
      password,
    }
    await user.createUser(newUser)
    res.status(200).json({ newUser })
  },
  updateUser: (req: express.Request, res: express.Response) => {
    const userPut = user.updateUser()
    res.status(200).json(userPut)
  },
  deleteUser: (req: express.Request, res: express.Response) => {
    const userDelete = user.deleteUser()
    res.status(200).json(userDelete)
  }
}

export default UserController
