/* eslint-disable no-useless-constructor */
import { IRegisterPixInformationRequestDTO } from '@/usecases/Pix/RegisterPixInformation/RegisterPixInformationDTO'
import { PixInformation } from '@/entities/PixInformation'
import { IPixInformationRepository } from '@/repositories/IPixInformationRepository'

export class RegisterPixInformationUseCase {
  constructor (
    private pixInformationRepository: IPixInformationRepository
  ) {}

  async execute (data: IRegisterPixInformationRequestDTO) {
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
