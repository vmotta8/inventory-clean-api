/* eslint-disable no-useless-escape */
/* eslint-disable no-useless-constructor */
import jwt from 'jsonwebtoken'
import { User } from '../../entities/User'
import { IMailProvider } from '../../providers/IMailProvider'
import { IUsersRepository } from '../../repositories/IUsersRepository'
import { ICreateUserRequestDTO } from './CreateUserDTO'
import envs from '../../configs/envs.config'

export class CreateUserUseCase {
  constructor (
    private usersRepository: IUsersRepository,
    private mailProvider: IMailProvider
  ) {}

  async execute (data: ICreateUserRequestDTO) {
    const user = new User(data)
    console.log(user)

    const userAlreadyExists = await this.usersRepository.findByEmail(data.email)
    if (userAlreadyExists) {
      throw new Error('User already exists.')
    }

    if ((data.name).length < 1) {
      throw new Error('Invalid name.')
    }

    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!re.test(data.email)) {
      throw new Error('Invalid email.')
    }

    if ((data.password).length !== ((data.password).replace(/\s/g, '')).length || (data.password).length < 6) {
      throw new Error('Invalid password.')
    }

    await this.usersRepository.save(user)

    await this.mailProvider.sendMail({
      to: data.email,
      from: 'equipe@email.com',
      subject: 'Seja bem-vindo à plataforma',
      body: '<p>Você já pode fazer login em nossa plataforma.</p>'
    })

    const token = jwt.sign({ id: user.id }, envs.SECRET_MD5, { expiresIn: '1d' })
    user.password = ''
    return { user, token }
  }
}
