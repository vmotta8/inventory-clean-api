import { Router } from 'express'
import { createUserController } from './usecases/CreateUser'

const router = Router()

router.post('/users/register', (req, res) => {
  return createUserController.handle(req, res)
})

export { router }
