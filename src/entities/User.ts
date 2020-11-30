import { uuidHelper } from './helpers/uuidHelper'
import { bcryptHelper } from './helpers/bcryptHelper'
import { emailValidator } from './validators/emailValidator'

export class User {
  public readonly id: string;

  public name: string;
  public email: string;
  public password: string;

  constructor (props: Omit<User, 'id'>) {
    this.name = props.name

    this.id = uuidHelper.create()

    this.password = bcryptHelper.generateHash(props.password)

    if (emailValidator(props.email)) {
      this.email = props.email
    } else {
      throw new Error('Invalid email.')
    }
  }
}
