/* eslint-disable no-unreachable */
import { IMailProvider, IMessage } from '@/providers/IMailProvider'

export class InMemoryMailProvider implements IMailProvider {
  async sendMail (message: IMessage): Promise<void> {
    //
  }
}
