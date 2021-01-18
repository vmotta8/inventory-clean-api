import { MongoPixInformationRepository } from '../../repositories/implementations/MongoPixInformationRepository'
import { RegisterPixInformationUseCase } from './RegisterPixInformationUseCase'
import { RegisterPixInformationController } from '../../controllers/RegisterPixInformationController'

const mongoPixInformationRepository = new MongoPixInformationRepository()

const registerPixInformationUseCase = new RegisterPixInformationUseCase(
  mongoPixInformationRepository
)

const registerPixInformationController = new RegisterPixInformationController(
  registerPixInformationUseCase
)

const TESTRegisterPixInformationUseCase = new RegisterPixInformationUseCase(
  mongoPixInformationRepository
)

export { registerPixInformationController, TESTRegisterPixInformationUseCase }
