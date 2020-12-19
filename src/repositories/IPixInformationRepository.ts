import { PixInformation } from '../entities/PixInformation'

export interface IPixInformationRepository {
  findByUserId (userId: string): Promise<PixInformation>;
  findByKey (key: string): Promise<PixInformation>;
  findById (id: string): Promise<PixInformation>;
  save (pixInformation: PixInformation): Promise<void>;
  updateByUserId (UserId: string, prop: string, data: string): Promise<void>;
}
