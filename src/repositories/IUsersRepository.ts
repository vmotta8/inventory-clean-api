import { User } from '@/entities/User'

export interface IUsersRepository {
  findByEmail (email: string): Promise<User>;
  findById (id: string): Promise<User>;
  updateOne (query: object, prop: string, data: string): Promise<void>
  save (user: User): Promise<void>;
}
