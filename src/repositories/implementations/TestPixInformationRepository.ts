import { IPixInformationRepository } from '../IPixInformationRepository'
import { PixInformation } from '../../entities/PixInformation'

export class TestPixInformationRepository implements IPixInformationRepository {
  private AllPixInformation: PixInformation[] = [];

  async findByUserId (userId: string): Promise<PixInformation> {
    const pixInformation = this.AllPixInformation.find(information => information.userId === userId)

    return pixInformation
  }

  async findByKey (key: string): Promise<PixInformation> {
    const pixInformation = this.AllPixInformation.find(information => information.key === key)

    return pixInformation
  }

  async save (pixInformation: PixInformation): Promise<void> {
    this.AllPixInformation.push(pixInformation)
  }
}
