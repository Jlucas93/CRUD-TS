import { Router } from 'express';

const homeRoutes = Router()

homeRoutes.get('/', (req, res) => {
  res.json("Hello world! with TS + Express")
})

export default homeRoutes