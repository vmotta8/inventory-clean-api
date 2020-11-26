/* eslint-disable no-unreachable */
import { IMailProvider, IMessage } from '../IMailProvider'

export class TestMailProvider implements IMailProvider {
  async sendMail (message: IMessage): Promise<number> {
    try {
      return 1
    } catch (err) {
      return 0
    }
  }
}
