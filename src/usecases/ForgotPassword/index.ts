import { TestUsersRepository } from '../../repositories/implementations/TestUsersRepository'
import { TestMailProvider } from '../../providers/implementations/TestMailProvider'
import { ForgotPasswordUseCase } from './ForgotPasswordUseCase'
import { ForgotPasswordController } from '../../controllers/ForgotPasswordController'

const testUsersRepository = new TestUsersRepository()
const testMailProvider = new TestMailProvider()

const forgotPasswordUseCase = new ForgotPasswordUseCase(
  testUsersRepository,
  testMailProvider
)

const forgotPasswordController = new ForgotPasswordController(
  forgotPasswordUseCase
)

export { forgotPasswordController }
