import { MongoPixInformationRepository } from '../../repositories/implementations/MongoPixInformationRepository'
import { UpdatePixInformationUseCase } from './UpdatePixInformationUseCase'
import { UpdatePixInformationController } from '../../controllers/UpdatePixInformationController'

const mongoPixInformationRepository = new MongoPixInformationRepository()

const updatePixInformationUseCase = new UpdatePixInformationUseCase(
  mongoPixInformationRepository
)

const updatePixInformationController = new UpdatePixInformationController(
  updatePixInformationUseCase
)

export { updatePixInformationController }
