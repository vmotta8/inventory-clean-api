import { database } from '@/database'
import { User } from '@/entities/User'
import { IUsersRepository } from '@/repositories/IUsersRepository'

export class MongoUsersRepository implements IUsersRepository {
  async findByEmail (email: string): Promise<User> {
    const userCollection = database.getCollection('users')
    const result = await userCollection.findOne({ email: email })
    return result
  }

  async findById (id: string): Promise<User> {
    const userCollection = database.getCollection('users')
    const result = await userCollection.findOne({ id: id })
    return result
  }

  async updateOne (query: object, prop: string, data: string): Promise<void> {
    const userCollection = database.getCollection('users')
    const update = { $set: { [prop]: data } }
    await userCollection.updateOne(query, update)
  }

  async save (user: User): Promise<void> {
    const userCollection = database.getCollection('users')
    const exists = await this.findByEmail(user.email)
    if (!exists) {
      await userCollection.insertOne(user)
    }
  }
}
