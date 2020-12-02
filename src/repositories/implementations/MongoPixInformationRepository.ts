import { IPixInformationRepository } from '../IPixInformationRepository'
import { PixInformation } from '../../entities/PixInformation'
import { MongoHelper } from '../../database'

export class MongoPixInformationRepository implements IPixInformationRepository {
  async findByUserId (userId: string): Promise<PixInformation> {
    const userCollection = MongoHelper.getCollection('pixinformation')
    const result = await userCollection.findOne({ userId: userId })
    return result
  }

  async findByKey (key: string): Promise<PixInformation> {
    const userCollection = MongoHelper.getCollection('pixinformation')
    const result = await userCollection.findOne({ key: key })
    return result
  }

  async findById (id: string): Promise<PixInformation> {
    const userCollection = MongoHelper.getCollection('pixinformation')
    const result = await userCollection.findOne({ id: id })
    return result
  }

  async save (pixInformation: PixInformation): Promise<void> {
    const userCollection = MongoHelper.getCollection('pixinformation')
    const exists = await this.findByKey(pixInformation.key)
    if (!exists) {
      await userCollection.insertOne(pixInformation)
    }
  }
}
