import { IMailProvider, IMessage } from '../IMailProvider'

export class TestMailProvider implements IMailProvider {
  async sendMail (message: IMessage): Promise<void> {
    setTimeout(() => {
      console.log({
        to: message.to,
        from: message.from,
        subject: message.subject,
        html: message.body
      })
    }, 2000)
  }
}
