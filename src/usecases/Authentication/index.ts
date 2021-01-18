import { MongoUsersRepository } from '../../repositories/implementations/MongoUsersRepository'
import { AuthenticationUseCase } from './AuthenticationUseCase'
import { AuthenticationController } from '../../controllers/AuthenticationController'

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
