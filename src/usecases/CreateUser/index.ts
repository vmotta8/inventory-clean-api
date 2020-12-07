import { MongoUsersRepository } from '../../repositories/implementations/MongoUsersRepository'
import { SESMailProvider } from '../../providers/implementations/SESMailProvider'
import { CreateUserUseCase } from './CreateUserUseCase'
import { CreateUserController } from '../../controllers/CreateUserController'

const mongoUsersRepository = new MongoUsersRepository()
const sesMailProvider = new SESMailProvider()

const createUserUseCase = new CreateUserUseCase(
  mongoUsersRepository,
  sesMailProvider
)

const createUserController = new CreateUserController(
  createUserUseCase
)

export { createUserController }
