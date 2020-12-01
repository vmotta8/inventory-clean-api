import { User } from '../entities/User'

export interface IUsersRepository {
  findByEmail (email: string): Promise<User>;
  findById (id: string): Promise<User>;
  updateByEmail (email: string, prop: string, data: string): Promise<void>
  save (user: User): Promise<void>;
}
