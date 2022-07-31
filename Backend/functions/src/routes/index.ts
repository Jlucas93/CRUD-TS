import { Router } from 'express';
import homeRoutes from "./home.routes"
import userRoutes from "./user.routes"
import productRoutes from "./product.routes"

const routes = Router();

routes.use('/', homeRoutes)
routes.use('/user', userRoutes)
routes.use('/product', productRoutes)

export default routes;
