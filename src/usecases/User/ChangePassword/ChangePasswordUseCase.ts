/* eslint-disable no-useless-constructor */
import { IUsersRepository } from '@/repositories/IUsersRepository'
import { IChangePasswordDTO } from './ChangePasswordDTO'
import { passwordValidator } from '@/entities/validators/passwordValidator'
import { bcryptHelper } from '@/helpers/bcryptHelper'

export class ChangePasswordUseCase {
  constructor (
    private usersRepository: IUsersRepository
  ) {}

  async execute (data: IChangePasswordDTO) {
    const userIdExists = await this.usersRepository.findById(data.userId)
    if (!userIdExists) {
      throw new Error('User does not exist.')
    }

    if (!passwordValidator(data.password)) {
      throw new Error('Invalid password.')
    }

    const passwordHash = bcryptHelper.generateHash(data.password)
    await this.usersRepository.updateOne({ id: data.userId }, 'password', passwordHash)

    const updatedUser = await this.usersRepository.findById(data.userId)
    delete updatedUser.password

    return updatedUser
  }
}
