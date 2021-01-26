import { UpdateNameUseCase } from './UpdateNameUseCase'
import { MongoUsersRepository } from '@/repositories/implementations/MongoUsersRepository'
import { UpdateNameController } from '@/usecases/User/UpdateName/UpdateNameController'

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
