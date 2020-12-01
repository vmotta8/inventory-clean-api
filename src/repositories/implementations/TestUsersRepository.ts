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

  async updatePasswordByEmail (email: string, password: string): Promise<boolean> {
    try {
      const newUser = new User({
        name: 'Vinicius',
        email: 'vinicius@email.com',
        password: '123456'
      })
      this.users.push(newUser)

      const index = this.users.findIndex(user => user.email === email)
      if (index === -1) {
        return false
      } else {
        this.users[index].password = password
      }

      return true
    } catch {
      return false
    }
  }

  async save (user: User): Promise<void> {
    this.users.push(user)
  }
}
