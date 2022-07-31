import { Router } from 'express';
import userController from '../controllers/user/userController'

const UserRoute = Router()

UserRoute.get('/', userController.getuser)
UserRoute.get('/:id', userController.getUserById)
UserRoute.post('/', userController.postuser)
UserRoute.put('/', userController.updateUser)
UserRoute.delete('/', userController.deleteUser)


export default UserRoute