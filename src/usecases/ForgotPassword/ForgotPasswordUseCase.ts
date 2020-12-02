/* eslint-disable no-useless-constructor */
import { IMailProvider } from '../../providers/IMailProvider'
import { IUsersRepository } from '../../repositories/IUsersRepository'
import { bcryptHelper } from '../../helpers/bcryptHelper'
import { IForgotPasswordDTO } from './ForgotPasswordDTO'

export class ForgotPasswordUseCase {
  constructor (
    private usersRepository: IUsersRepository,
    private mailProvider: IMailProvider
  ) {}

  async execute (data: IForgotPasswordDTO) {
    const newPassword = (Math.random().toString(36).slice(2))
    const newPasswordHash = bcryptHelper.generateHash(newPassword)

    const emailExists = await this.usersRepository.findByEmail(data.email)

    if (emailExists) {
      await this.usersRepository.updateByEmail(data.email, 'password', newPasswordHash)
    } else {
      throw new Error('User does not exist.')
    }

    try {
      await this.mailProvider.sendMail({
        to: data.email,
        from: 'equipe@email.com',
        subject: 'Solicitação de nova senha na plataforma',
        body: `<p>Sua nova senha é: ${newPassword}.</p>`
      })
    } catch {
      throw new Error('Error sending email, try again.')
    }
  }
}
