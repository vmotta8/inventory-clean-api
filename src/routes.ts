import { Router } from 'express'
import AuthMiddleware from '@/middlewares/AuthMiddleware'
import { createUserController } from '@/usecases/CreateUser'
import { registerPixInformationController } from '@/usecases/RegisterPixInformation'
import { forgotPasswordController } from '@/usecases/ForgotPassword'
import { generatePixStringController } from '@/usecases/GeneratePixString'
import { authenticationController } from '@/usecases/Authentication'
import { updatePixInformationController } from '@/usecases/UpdatePixInformation'

const router = Router()

router.post('/users/register', (req, res) => {
  return createUserController.handle(req, res)
})

router.get('/users/authentication', (req, res) => {
  return authenticationController.handle(req, res)
})

router.post('/users/forgot_password', (req, res) => {
  return forgotPasswordController.handle(req, res)
})

router.post('/pix/register', AuthMiddleware, (req, res) => {
  return registerPixInformationController.handle(req, res)
})

router.post('/pix/update', AuthMiddleware, (req, res) => {
  return updatePixInformationController.handle(req, res)
})

router.get('/pix/generate_string', AuthMiddleware, (req, res) => {
  return generatePixStringController.handle(req, res)
})

export { router }
