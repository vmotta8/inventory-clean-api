import { UpdateNameUseCase } from './UpdateUserUseCase'
import { MongoUsersRepository } from '@/repositories/implementations/MongoUsersRepository'
import { UpdateNameController } from '@/controllers/UpdateNameController'

const updateNameUseCase = new UpdateNameUseCase(
  new MongoUsersRepository()
)

const updateNameController = new UpdateNameController(
  updateNameUseCase
)

const TESTupdateNameUseCase = new UpdateNameUseCase(
  new MongoUsersRepository()
)

export { updateNameController, TESTupdateNameUseCase }
