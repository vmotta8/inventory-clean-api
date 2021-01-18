/* eslint-disable no-unreachable */
import { IMailProvider, IMessage } from '../../IMailProvider'

export class InMemoryMailProvider implements IMailProvider {
  async sendMail (message: IMessage): Promise<void> {
    //
  }
}
