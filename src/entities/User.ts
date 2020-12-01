import { uuidHelper } from './helpers/uuidHelper'
import { emailValidator } from './validators/emailValidator'
import { passwordValidator } from './validators/passwordValidator'
import { nameValidator } from './validators/nameValidator'

export class User {
  public readonly id: string;

  public name: string;
  public email: string;
  public password: string;

  constructor (props: Omit<User, 'id'>) {
    this.id = uuidHelper.create()

    if (nameValidator(props.name)) {
      this.name = props.name
    } else {
      throw new Error('Invalid name.')
    }

    if (emailValidator(props.email)) {
      this.email = props.email
    } else {
      throw new Error('Invalid email.')
    }

    if (passwordValidator(props.password)) {
      this.password = props.password
    } else {
      throw new Error('Invalid password.')
    }
  }
}
