import { User } from '../entities/User'

export interface IUsersRepository {
  findByEmail (email: string): Promise<User>;
  findById (id: string): Promise<User>;
  updatePasswordByEmail (email: string, password: string): Promise<boolean>
  save (user: User): Promise<void>;
}
