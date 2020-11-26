/* eslint-disable no-useless-constructor */
import { PixInformation } from '../../entities/PixInformation'
import { IPixInformationRepository } from '../../repositories/IPixInformationRepository'
import { IRegisterPixInformationRequestDTO } from './RegisterPixInformationDTO'

export class RegisterPixInformationUseCase {
  constructor (
    private pixInformationRepository: IPixInformationRepository
  ) {}

  async execute (data: IRegisterPixInformationRequestDTO) {
    const keyExists = await this.pixInformationRepository.findByKey(data.key)
    if (keyExists) {
      throw new Error('Key already exists.')
    }

    const userIdExists = await this.pixInformationRepository.findByUserId(data.userId)
    if (userIdExists) {
      throw new Error('User id already exists.')
    }

    const information = new PixInformation(data)
    await this.pixInformationRepository.save(information)

    return information
  }
}
