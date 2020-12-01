import { Router } from 'express'
import AuthMiddleware from './middlewares/AuthMiddleware'
import { createUserController } from './usecases/CreateUser'
import { registerPixInformationController } from './usecases/RegisterPixInformation'
import { forgotPasswordController } from './usecases/ForgotPassword'

const router = Router()

router.post('/users/register', (req, res) => {
  return createUserController.handle(req, res)
})

router.post('/pix/register', AuthMiddleware, (req, res) => {
  return registerPixInformationController.handle(req, res)
})

router.post('/users/forgot_password', (req, res) => {
  return forgotPasswordController.handle(req, res)
})

export { router }
