import { PixInformation } from '../entities/PixInformation'

export interface IPixInformationRepository {
  findByUserId (userId: string): Promise<PixInformation>;
  findByKey (key: string): Promise<PixInformation>;
  save (pixInformation: PixInformation): Promise<void>;
}
