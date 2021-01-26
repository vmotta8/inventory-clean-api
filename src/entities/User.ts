import { uuidHelper } from '@/helpers/uuidHelper'
import { emailValidator } from '@/entities/validators/emailValidator'
import { passwordValidator } from '@/entities/validators/passwordValidator'
import { nameValidator } from '@/entities/validators/nameValidator'
import { trimHelper } from '@/helpers/trimHelper'

export class User {
  public readonly id: string;

  public name: string;
  public email: string;
  public password: string;

  constructor (props: Omit<User, 'id'>) {
    this.id = uuidHelper.create()

    if (nameValidator(props.name)) {
      this.name = trimHelper.oneSpace(props.name)
    } else {
      throw new Error('Invalid name.')
    }

    if (emailValidator(props.email)) {
      this.email = trimHelper.oneSpace(props.email)
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
