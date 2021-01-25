import { CreateUserUseCase } from './CreateUserUseCase'
import { MongoUsersRepository } from '@/repositories/implementations/MongoUsersRepository'
import { SESMailProvider } from '@/providers/implementations/SESMailProvider'
import { InMemoryMailProvider } from '@/providers/implementations/InMemory/InMemoryMailProvider'
import { CreateUserController } from '@/usecases/User/CreateUser/CreateUserController'

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
