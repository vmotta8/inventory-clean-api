import { IUsersRepository } from '../IUsersRepository'
import { User } from '../../entities/User'

export class TestUsersRepository implements IUsersRepository {
  private users: User[] = [];

  async findByEmail (email: string): Promise<User> {
    const user = this.users.find(user => user.email === email)

    return user
  }

  async findById (id: string): Promise<User> {
    const user = this.users.find(user => user.id === id)

    return user
  }

  async save (user: User): Promise<void> {
    this.users.push(user)
  }
}
