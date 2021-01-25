import { ForgotPasswordUseCase } from './ForgotPasswordUseCase'
import { MongoUsersRepository } from '@/repositories/implementations/MongoUsersRepository'
import { SESMailProvider } from '@/providers/implementations/SESMailProvider'
import { InMemoryMailProvider } from '@/providers/implementations/InMemory/InMemoryMailProvider'
import { ForgotPasswordController } from '@/controllers/ForgotPasswordController'

const mongoUsersRepository = new MongoUsersRepository()
const sesMailProvider = new SESMailProvider()
const inMemoryMailProvider = new InMemoryMailProvider()

const forgotPasswordUseCase = new ForgotPasswordUseCase(
  mongoUsersRepository,
  sesMailProvider
)

const forgotPasswordController = new ForgotPasswordController(
  forgotPasswordUseCase
)

const TESTForgotPasswordUseCase = new ForgotPasswordUseCase(
  mongoUsersRepository,
  inMemoryMailProvider
)

export { forgotPasswordController, TESTForgotPasswordUseCase }
