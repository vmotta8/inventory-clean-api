import { uuidHelper } from './helpers/uuidHelper'

export class User {
  public readonly id: string;

  public name: string;
  public email: string;
  public password: string;

  constructor (props: Omit<User, 'id'>) {
    Object.assign(this, props)
    this.id = uuidHelper.create()
  }
}
