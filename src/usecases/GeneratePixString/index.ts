import { GeneratePixStringUseCase } from './GeneratePixStringUseCase'
import { MongoPixInformationRepository } from '@/repositories/implementations/MongoPixInformationRepository'
import { GeneratePixStringController } from '@/controllers/GeneratePixStringController'

const mongoPixInformationRepository = new MongoPixInformationRepository()

const generatePixStringUseCase = new GeneratePixStringUseCase(
  mongoPixInformationRepository
)

const generatePixStringController = new GeneratePixStringController(
  generatePixStringUseCase
)

const TESTGeneratePixStringUseCase = new GeneratePixStringUseCase(
  mongoPixInformationRepository
)
export { generatePixStringController, TESTGeneratePixStringUseCase }
