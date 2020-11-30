import { TestPixInformationRepository } from '../../repositories/implementations/TestPixInformationRepository'
import { RegisterPixInformationUseCase } from './RegisterPixInformationUseCase'
import { RegisterPixInformationController } from '../../controllers/RegisterPixInformationController'

const testPixInformationRepository = new TestPixInformationRepository()

const registerPixInformationUseCase = new RegisterPixInformationUseCase(
  testPixInformationRepository
)

const registerPixInformationController = new RegisterPixInformationController(
  registerPixInformationUseCase
)

export { registerPixInformationController }
