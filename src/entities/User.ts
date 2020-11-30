import { uuidHelper } from './helpers/uuidHelper'
import { bcryptHelper } from './helpers/bcryptHelper'

export class User {
  public readonly id: string;

  public name: string;
  public email: string;
  public password: string;

  constructor (props: Omit<User, 'id'>) {
    this.id = uuidHelper.create()
    this.password = bcryptHelper.generateHash(props.password)
    this.name = props.name
    this.email = props.email
  }
}
