import { MongoPixInformationRepository } from '../../repositories/implementations/MongoPixInformationRepository'
import { GeneratePixStringUseCase } from './GeneratePixStringUseCase'
import { GeneratePixStringController } from '../../controllers/GeneratePixStringController'

const mongoPixInformationRepository = new MongoPixInformationRepository()

const generatePixStringUseCase = new GeneratePixStringUseCase(
  mongoPixInformationRepository
)

const generatePixStringController = new GeneratePixStringController(
  generatePixStringUseCase
)

export { generatePixStringUseCase, generatePixStringController }
