/* eslint-disable no-useless-constructor */
import { IPixInformationRepository } from '../../repositories/IPixInformationRepository'
import { IGeneratePixStringDTO } from './GeneratePixStringDTO'
import { crc16Helper } from '../../helpers/crc16Helper'
import StaticPixConfig from '../../configs/staticpix.config'

export class GeneratePixStringUseCase {
  constructor (
    private pixInformationRepository: IPixInformationRepository
  ) {}

  async execute (data: IGeneratePixStringDTO) {
    const price = (data.value).toFixed(2)

    const userStaticPixInformation = await this.pixInformationRepository.findByUserId(data.userId)

    if (!userStaticPixInformation) {
      throw new Error('You must register your pix information first.')
    }

    const userKeyLength = this.rightLength((userStaticPixInformation.key).length)
    const cityLength = this.rightLength((userStaticPixInformation.city).length)
    const beneficiaryNameLength = this.rightLength((userStaticPixInformation.name).length)
    const priceLength = this.rightLength(price.toString().length)

    const MerchantAccountInformationLength = 22 + (userStaticPixInformation.key).length

    const pixString = `${StaticPixConfig.PayloadFormatIndicator}${StaticPixConfig.PointofInitiationMethod}26${MerchantAccountInformationLength}${StaticPixConfig.MerchantAccountInformation}01${userKeyLength}${userStaticPixInformation.key}${StaticPixConfig.MerchantCategoryCode}${StaticPixConfig.TransactionCurrency}54${priceLength}${price}${StaticPixConfig.CountryCode}59${beneficiaryNameLength}${userStaticPixInformation.name}60${cityLength}${userStaticPixInformation.city}6304`

    const pixCrc = crc16Helper.generate(pixString)

    return pixString + pixCrc
  }

  rightLength (wordLength: number) {
    let wordLengthStr = ''
    if (wordLength < 10) {
      wordLengthStr = `0${wordLength}`
    } else {
      wordLengthStr = `${wordLength}`
    }

    return wordLengthStr
  }
}
