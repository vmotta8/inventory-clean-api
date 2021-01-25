/* eslint-disable no-useless-constructor */
import { IUpdatePixInformationRequestDTO } from '@/usecases/Pix/UpdatePixInformation/UpdatePixInformationDTO'
import { IPixInformationRepository } from '@/repositories/IPixInformationRepository'
import { trimHelper } from '@/helpers/trimHelper'

export class UpdatePixInformationUseCase {
  constructor (
    private pixInformationRepository: IPixInformationRepository
  ) {}

  async execute (data: IUpdatePixInformationRequestDTO) {
    const newData = [
      data.city, data.key, data.name, data.userId
    ]

    for (const item of newData) {
      if (item === null || item === undefined || item === '') {
        throw new Error('Null or undefined is not accepted.')
      }
    }

    data.name = trimHelper.oneSpace(data.name)
    data.key = trimHelper.oneSpace(data.key)
    data.city = trimHelper.oneSpace(data.city)

    const userIdExists = await this.pixInformationRepository.findByUserId(data.userId)
    if (!userIdExists) {
      throw new Error('Register information first.')
    }

    const keyExists = await this.pixInformationRepository.findByKey(data.key)
    if (keyExists && keyExists.key !== userIdExists.key) {
      throw new Error('Key already exists.')
    }

    const formattedData = [
      { key: data.key }, { city: data.city }, { name: data.name }
    ]

    for await (const item of formattedData) {
      const response = Object.keys(item).map(function (key): object {
        const objName = Object.getOwnPropertyNames(item)[0]
        const objValue = item[key]

        return [objName, objValue]
      })

      await this.pixInformationRepository.updateByUserId(data.userId, response[0][0], response[0][1])
    }

    const newPixInformation = await this.pixInformationRepository.findByUserId(data.userId)

    return newPixInformation
  }
}
