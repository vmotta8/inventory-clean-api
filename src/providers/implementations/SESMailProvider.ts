/* eslint-disable no-unreachable */
import { IMailProvider, IMessage } from '@/providers/IMailProvider'
import envs from '@/configs/envs.config'
import AWS from 'aws-sdk'

AWS.config.update({
  accessKeyId: envs.AWS_ACCESS_KEY_ID,
  secretAccessKey: envs.AWS_SECRET_ACCESS_KEY,
  region: 'us-east-1'
})

export class SESMailProvider implements IMailProvider {
  async sendMail (message: IMessage): Promise<void> {
    const sendPromise = new AWS.SES({ apiVersion: '2010-12-01' }).sendEmail(
      {
        Source: message.from,
        Destination: {
          ToAddresses: [
            message.to
          ]
        },
        Message: {
          Subject: {
            Charset: 'UTF-8',
            Data: message.subject
          },
          Body: {
            Text: {
              Charset: 'UTF-8',
              Data: message.body
            }
          }
        }
      }
    ).promise()

    sendPromise.then(
      function (data: { MessageId: any }) {
        console.log(data.MessageId)
      }).catch(
      function (err: { stack: any }) {
        console.error(err, err.stack)
      })
  }
}
