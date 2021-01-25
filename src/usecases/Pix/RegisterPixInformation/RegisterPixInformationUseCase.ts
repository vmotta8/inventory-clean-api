/* eslint-disable no-useless-constructor */
import { IRegisterPixInformationRequestDTO } from '@/usecases/Pix/RegisterPixInformation/RegisterPixInformationDTO'
import { PixInformation } from '@/entities/PixInformation'
import { IPixInformationRepository } from '@/repositories/IPixInformationRepository'

export class RegisterPixInformationUseCase {
  constructor (
    private pixInformationRepository: IPixInformationRepository
  ) {}

  async execute (data: IRegisterPixInformationRequestDTO) {
    const newData = [
      data.city, data.key, data.name, data.userId
    ]

    for (const item of newData) {
      if (item === null || item === undefined || item === '') {
        throw new Error('Null or undefined is not accepted.')
      }
    }

    data.name = trimData(data.name)
    data.key = trimData(data.key)
    data.city = trimData(data.city)

    const information = new PixInformation(data)

    const idAlreadyExists = await this.pixInformationRepository.findById(information.id)
    if (idAlreadyExists) {
      throw new Error('Id already exists.')
    }

    const keyExists = await this.pixInformationRepository.findByKey(data.key)
    if (keyExists) {
      throw new Error('Key already exists.')
    }

    const userIdExists = await this.pixInformationRepository.findByUserId(data.userId)
    if (userIdExists) {
      throw new Error('User id already exists.')
    }

    await this.pixInformationRepository.save(information)

    return information
  }
}

function trimData (data: string) {
  return data.replace(/ +(?= )/g, '')
}
