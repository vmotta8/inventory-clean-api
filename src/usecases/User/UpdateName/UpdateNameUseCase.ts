/* eslint-disable no-useless-constructor */
import { IUsersRepository } from '@/repositories/IUsersRepository'
import { IUpdateNameDTO } from '@/usecases/User/UpdateName/UpdateNameDTO'
import { nameValidator } from '@/entities/validators/nameValidator'

export class UpdateNameUseCase {
  constructor (
    private usersRepository: IUsersRepository
  ) {}

  async execute (data: IUpdateNameDTO) {
    const userIdExists = await this.usersRepository.findById(data.userId)
    if (!userIdExists) {
      throw new Error('User does not exist.')
    }

    if (!nameValidator(data.name)) {
      throw new Error('Invalid name.')
    }

    await this.usersRepository.updateOne({ id: data.userId }, 'name', data.name)

    const updatedUser = await this.usersRepository.findById(data.userId)
    delete updatedUser.password

    return updatedUser
  }
}
