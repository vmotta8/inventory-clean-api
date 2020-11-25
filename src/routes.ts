import { Router } from 'express'
import { createUserController } from './usecases/CreateUser'
import AuthMiddleware from './middlewares/AuthMiddleware'

const router = Router()

router.post('/users/register', (req, res) => {
  return createUserController.handle(req, res)
})

router.get('/users/teste', AuthMiddleware, (req, res) => {
  return res.json(req.userId)
})

export { router }
