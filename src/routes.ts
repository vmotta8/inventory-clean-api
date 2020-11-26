import { Router } from 'express'
import { createUserController } from './usecases/CreateUser'
import { registerPixInformationController } from './usecases/RegisterPixInformation'
import AuthMiddleware from './middlewares/AuthMiddleware'

const router = Router()

router.post('/users/register', (req, res) => {
  return createUserController.handle(req, res)
})

router.post('/pix/register', AuthMiddleware, (req, res) => {
  return registerPixInformationController.handle(req, res)
})

export { router }
