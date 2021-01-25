/* eslint-disable no-useless-constructor */
import { IAuthenticationDTO } from '@/usecases/User/Authentication/AuthenticationDTO'
import { IUsersRepository } from '@/repositories/IUsersRepository'
import { bcryptHelper } from '@/helpers/bcryptHelper'
import { jwtHelper } from '@/helpers/jwtHelper'

export class AuthenticationUseCase {
  constructor (
    private usersRepository: IUsersRepository
  ) {}

  async execute (data: IAuthenticationDTO) {
    const user = await this.usersRepository.findByEmail(data.email)
    if (!user) {
      throw new Error('Email not found.')
    }

    const isValidPassword = await bcryptHelper.compare(data.password, user.password)

    if (!isValidPassword) {
      throw new Error('Wrong password.')
    }

    delete user.password
    const token = jwtHelper.generateToken(user.id)

    return { user, token }
  }
}
