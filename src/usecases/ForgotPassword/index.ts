import { MongoUsersRepository } from '../../repositories/implementations/MongoUsersRepository'
import { TestMailProvider } from '../../providers/implementations/TestMailProvider'
import { ForgotPasswordUseCase } from './ForgotPasswordUseCase'
import { ForgotPasswordController } from '../../controllers/ForgotPasswordController'

const mongoUsersRepository = new MongoUsersRepository()
const testMailProvider = new TestMailProvider()

const forgotPasswordUseCase = new ForgotPasswordUseCase(
  mongoUsersRepository,
  testMailProvider
)

const forgotPasswordController = new ForgotPasswordController(
  forgotPasswordUseCase
)

export { forgotPasswordController }
