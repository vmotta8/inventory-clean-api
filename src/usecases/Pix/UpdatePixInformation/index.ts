import { UpdatePixInformationUseCase } from './UpdatePixInformationUseCase'
import { MongoPixInformationRepository } from '@/repositories/implementations/MongoPixInformationRepository'
import { UpdatePixInformationController } from '@/usecases/Pix/UpdatePixInformation/UpdatePixInformationController'

const mongoPixInformationRepository = new MongoPixInformationRepository()

const updatePixInformationUseCase = new UpdatePixInformationUseCase(
  mongoPixInformationRepository
)

const updatePixInformationController = new UpdatePixInformationController(
  updatePixInformationUseCase
)

const TESTUpdatePixInformationUseCase = new UpdatePixInformationUseCase(
  mongoPixInformationRepository
)

export { updatePixInformationController, TESTUpdatePixInformationUseCase }
