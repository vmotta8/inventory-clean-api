import { TestUsersRepository } from '../../repositories/implementations/TestUsersRepository'
import { TestMailProvider } from '../../providers/implementations/TestMailProvider'
import { CreateUserUseCase } from './CreateUserUseCase'
import { CreateUserController } from './CreateUserController'

const testUsersRepository = new TestUsersRepository()
const testMailProvider = new TestMailProvider()

const createUserUseCase = new CreateUserUseCase(
  testUsersRepository,
  testMailProvider
)

const createUserController = new CreateUserController(
  createUserUseCase
)

export { createUserController }
