import { Router } from 'express'
import AuthMiddleware from '@/middlewares/AuthMiddleware'
import { createUserController, authenticationController, forgotPasswordController, updateNameController, changePasswordController } from '@/usecases/User'
import { registerPixInformationController, generatePixStringController, updatePixInformationController } from '@/usecases/Pix'

const router = Router()

router.post('/users/register', (req, res) => {
  return createUserController.handle(req, res)
})

router.post('/users/update-name', AuthMiddleware, (req, res) => {
  return updateNameController.handle(req, res)
})

router.post('/users/change-password', AuthMiddleware, (req, res) => {
  return changePasswordController.handle(req, res)
})

router.get('/users/authentication', (req, res) => {
  return authenticationController.handle(req, res)
})

router.post('/users/forgot-password', (req, res) => {
  return forgotPasswordController.handle(req, res)
})

router.post('/pix/register', AuthMiddleware, (req, res) => {
  return registerPixInformationController.handle(req, res)
})

router.post('/pix/update', AuthMiddleware, (req, res) => {
  return updatePixInformationController.handle(req, res)
})

router.get('/pix/generate-string', AuthMiddleware, (req, res) => {
  return generatePixStringController.handle(req, res)
})

export { router }
