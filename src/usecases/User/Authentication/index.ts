import { AuthenticationUseCase } from './AuthenticationUseCase'
import { MongoUsersRepository } from '@/repositories/implementations/MongoUsersRepository'
import { AuthenticationController } from '@/usecases/User/Authentication/AuthenticationController'

const mongoUsersRepository = new MongoUsersRepository()

const authenticationUseCase = new AuthenticationUseCase(
  mongoUsersRepository
)

const authenticationController = new AuthenticationController(
  authenticationUseCase
)

const TESTAuthenticationUseCase = new AuthenticationUseCase(
  mongoUsersRepository
)

export { authenticationController, TESTAuthenticationUseCase }
