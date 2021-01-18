import { MongoUsersRepository } from '../../repositories/implementations/MongoUsersRepository'
import { SESMailProvider } from '../../providers/implementations/SESMailProvider'
import { InMemoryMailProvider } from '../../providers/implementations/InMemory/InMemoryMailProvider'
import { CreateUserUseCase } from './CreateUserUseCase'
import { CreateUserController } from '../../controllers/CreateUserController'

const mongoUsersRepository = new MongoUsersRepository()
const sesMailProvider = new SESMailProvider()
const inMemoryMailProvider = new InMemoryMailProvider()

const createUserUseCase = new CreateUserUseCase(
  mongoUsersRepository,
  sesMailProvider
)

const createUserController = new CreateUserController(
  createUserUseCase
)

const TESTCreateUserUseCase = new CreateUserUseCase(
  mongoUsersRepository,
  inMemoryMailProvider
)

export { createUserController, TESTCreateUserUseCase }
