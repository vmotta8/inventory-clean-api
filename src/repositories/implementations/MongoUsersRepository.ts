import { IUsersRepository } from '../IUsersRepository'
import { User } from '../../entities/User'
import { MongoHelper } from '../../database'

export class MongoUsersRepository implements IUsersRepository {
  async findByEmail (email: string): Promise<User> {
    const userCollection = MongoHelper.getCollection('users')
    const result = await userCollection.findOne({ email: email })
    return result
  }

  async findById (id: string): Promise<User> {
    const userCollection = MongoHelper.getCollection('users')
    const result = await userCollection.findOne({ id: id })
    return result
  }

  async updateByEmail (email: string, prop: string, data: string): Promise<void> {
    const userCollection = MongoHelper.getCollection('users')
    const query = { email: email }
    const update = { $set: { [prop]: data } }
    await userCollection.updateOne(query, update)
  }

  async save (user: User): Promise<void> {
    const userCollection = MongoHelper.getCollection('users')
    const exists = await this.findByEmail(user.email)
    if (!exists) {
      await userCollection.insertOne(user)
    }
  }
}
