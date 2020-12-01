import { MongoUsersRepository } from '../../repositories/implementations/MongoUsersRepository'
import { TestMailProvider } from '../../providers/implementations/TestMailProvider'
import { CreateUserUseCase } from './CreateUserUseCase'
import { CreateUserController } from '../../controllers/CreateUserController'

const mongoUsersRepository = new MongoUsersRepository()
const testMailProvider = new TestMailProvider()

const createUserUseCase = new CreateUserUseCase(
  mongoUsersRepository,
  testMailProvider
)

const createUserController = new CreateUserController(
  createUserUseCase
)

export { createUserController }
