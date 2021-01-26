import { ChangePasswordUseCase } from './ChangePasswordUseCase'
import { MongoUsersRepository } from '@/repositories/implementations/MongoUsersRepository'
import { ChangePasswordController } from '@/usecases/User/ChangePassword/ChangePasswordController'

const changePasswordUseCase = new ChangePasswordUseCase(
  new MongoUsersRepository()
)

const changePasswordController = new ChangePasswordController(
  changePasswordUseCase
)

const TESTChangePasswordUseCase = new ChangePasswordUseCase(
  new MongoUsersRepository()
)

export { changePasswordController, TESTChangePasswordUseCase }
