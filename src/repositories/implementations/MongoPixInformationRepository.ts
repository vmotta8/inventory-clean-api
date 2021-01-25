import { IPixInformationRepository } from '../IPixInformationRepository'
import { PixInformation } from '../../entities/PixInformation'
import { database } from '../../database/index'

export class MongoPixInformationRepository implements IPixInformationRepository {
  async findByUserId (userId: string): Promise<PixInformation> {
    const pixCollection = database.getCollection('pixinformation')
    const result = await pixCollection.findOne({ userId: userId })
    return result
  }

  async findByKey (key: string): Promise<PixInformation> {
    const pixCollection = database.getCollection('pixinformation')
    const result = await pixCollection.findOne({ key: key })
    return result
  }

  async findById (id: string): Promise<PixInformation> {
    const pixCollection = database.getCollection('pixinformation')
    const result = await pixCollection.findOne({ id: id })
    return result
  }

  async save (pixInformation: PixInformation): Promise<void> {
    const pixCollection = database.getCollection('pixinformation')
    const exists = await this.findByKey(pixInformation.key)
    if (!exists) {
      await pixCollection.insertOne(pixInformation)
    }
  }

  async updateByUserId (userId: string, prop: string, data: string): Promise<void> {
    const pixCollection = database.getCollection('pixinformation')
    const query = { userId: userId }
    const update = { $set: { [prop]: data } }
    await pixCollection.updateOne(query, update)
  }
}
