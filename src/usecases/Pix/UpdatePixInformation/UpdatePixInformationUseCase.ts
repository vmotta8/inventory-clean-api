/* eslint-disable no-useless-constructor */
import { IUpdatePixInformationRequestDTO } from '@/usecases/Pix/UpdatePixInformation/UpdatePixInformationDTO'
import { IPixInformationRepository } from '@/repositories/IPixInformationRepository'
import { PixInformation } from '@/entities/PixInformation'

export class UpdatePixInformationUseCase {
  constructor (
    private pixInformationRepository: IPixInformationRepository
  ) {}

  async execute (data: IUpdatePixInformationRequestDTO) {
    // eslint-disable-next-line no-unused-vars
    const information = new PixInformation(data)

    const userIdExists = await this.pixInformationRepository.findByUserId(information.userId)
    if (!userIdExists) {
      throw new Error('Register information first.')
    }

    const keyExists = await this.pixInformationRepository.findByKey(information.key)
    if (keyExists && keyExists.key !== userIdExists.key) {
      throw new Error('Key already exists.')
    }

    const formattedData = [
      { key: information.key }, { city: information.city }, { name: information.name }
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
