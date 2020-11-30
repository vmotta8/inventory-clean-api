/* eslint-disable no-useless-escape */
/* eslint-disable no-useless-constructor */
import { User } from '../../entities/User'
import { IMailProvider } from '../../providers/IMailProvider'
import { IUsersRepository } from '../../repositories/IUsersRepository'
import { ICreateUserRequestDTO } from './CreateUserDTO'

export class CreateUserUseCase {
  constructor (
    private usersRepository: IUsersRepository,
    private mailProvider: IMailProvider
  ) {}

  async execute (data: ICreateUserRequestDTO) {
    const user = new User(data)

    const userAlreadyExists = await this.usersRepository.findByEmail(data.email)
    if (userAlreadyExists) {
      throw new Error('User already exists.')
    }

    await this.usersRepository.save(user)

    await this.mailProvider.sendMail({
      to: data.email,
      from: 'equipe@email.com',
      subject: 'Seja bem-vindo à plataforma',
      body: '<p>Você já pode fazer login em nossa plataforma.</p>'
    })

    user.password = ''
    return { user }
  }
}
