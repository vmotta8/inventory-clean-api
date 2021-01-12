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

export { authenticationController, authenticationUseCase }
