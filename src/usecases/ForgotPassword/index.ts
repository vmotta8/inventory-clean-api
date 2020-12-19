import { MongoUsersRepository } from '../../repositories/implementations/MongoUsersRepository'
import { SESMailProvider } from '../../providers/implementations/SESMailProvider'
import { ForgotPasswordUseCase } from './ForgotPasswordUseCase'
import { ForgotPasswordController } from '../../controllers/ForgotPasswordController'

const mongoUsersRepository = new MongoUsersRepository()
const sesMailProvider = new SESMailProvider()

const forgotPasswordUseCase = new ForgotPasswordUseCase(
  mongoUsersRepository,
  sesMailProvider
)

const forgotPasswordController = new ForgotPasswordController(
  forgotPasswordUseCase
)

export { forgotPasswordUseCase, forgotPasswordController }
