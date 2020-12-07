/* eslint-disable no-useless-constructor */
import { User } from '../../entities/User'
import { IMailProvider } from '../../providers/IMailProvider'
import { IUsersRepository } from '../../repositories/IUsersRepository'
import { bcryptHelper } from '../../helpers/bcryptHelper'
import { ICreateUserRequestDTO } from './CreateUserDTO'
import envs from '../../configs/envs.config'

export class CreateUserUseCase {
  constructor (
    private usersRepository: IUsersRepository,
    private mailProvider: IMailProvider
  ) {}

  async execute (data: ICreateUserRequestDTO) {
    const user = new User(data)
    user.password = bcryptHelper.generateHash(user.password)

    const idAlreadyExists = await this.usersRepository.findById(user.id)
    if (idAlreadyExists) {
      throw new Error('Id already exists.')
    }

    const userAlreadyExists = await this.usersRepository.findByEmail(data.email)
    if (userAlreadyExists) {
      throw new Error('User already exists.')
    }

    await this.usersRepository.save(user)
    delete user.password

    await this.mailProvider.sendMail({
      to: data.email,
      from: envs.EMAIL,
      subject: 'Seja bem-vindo à plataforma',
      body: '<p>Você já pode fazer login em nossa plataforma.</p>'
    })

    return user
  }
}
