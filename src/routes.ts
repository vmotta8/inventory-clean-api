import { Router } from 'express'
import AuthMiddleware from '@/middlewares/AuthMiddleware'
import { createUserController } from '@/usecases/User/CreateUser'
import { registerPixInformationController } from '@/usecases/Pix/RegisterPixInformation'
import { forgotPasswordController } from '@/usecases/User/ForgotPassword'
import { generatePixStringController } from '@/usecases/Pix/GeneratePixString'
import { authenticationController } from '@/usecases/User/Authentication'
import { updatePixInformationController } from '@/usecases/Pix/UpdatePixInformation'

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
