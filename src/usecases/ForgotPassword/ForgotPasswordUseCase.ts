/* eslint-disable no-useless-constructor */
import { IMailProvider } from '../../providers/IMailProvider'
import { IUsersRepository } from '../../repositories/IUsersRepository'
import { IForgotPasswordDTO } from './ForgotPasswordDTO'

export class ForgotPasswordUseCase {
  constructor (
    private usersRepository: IUsersRepository,
    private mailProvider: IMailProvider
  ) {}

  async execute (data: IForgotPasswordDTO) {
    const newPassword = Math.random().toString(36).slice(2)
    const update = await this.usersRepository.updatePasswordByEmail(data.email, newPassword)

    if (!update) {
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

    return { message: 'A new password was sent in your email, check the spam box.' }
  }
}
