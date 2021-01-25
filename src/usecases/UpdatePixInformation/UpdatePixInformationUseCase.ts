/* eslint-disable no-useless-constructor */
import { IPixInformationRepository } from '@/repositories/IPixInformationRepository'
import { IUpdatePixInformationRequestDTO } from '@/usecases/UpdatePixInformation/UpdatePixInformationDTO'

export class UpdatePixInformationUseCase {
  constructor (
    private pixInformationRepository: IPixInformationRepository
  ) {}

  async execute (data: IUpdatePixInformationRequestDTO) {
    const userIdExists = await this.pixInformationRepository.findByUserId(data.userId)
    if (!userIdExists) {
      throw new Error('Register information first.')
    }

    const keyExists = await this.pixInformationRepository.findByKey(data.key)
    if (keyExists && keyExists.key !== userIdExists.key) {
      throw new Error('Key already exists.')
    }

    const newData = [
      { key: data.key }, { city: data.city }, { name: data.name }
    ]

    for await (const item of newData) {
      const response = Object.keys(item).map(function (key): object {
        if ((item[key]).length !== 0) {
          const objName = Object.getOwnPropertyNames(item)[0]
          const objValue = item[key]

          return [objName, objValue]
        }

        return []
      })

      if (Object.keys(response[0]).length !== 0) {
        await this.pixInformationRepository.updateByUserId(data.userId, response[0][0], response[0][1])
      }
    }
  }
}
