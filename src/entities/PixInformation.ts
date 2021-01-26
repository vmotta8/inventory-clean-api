import { trimHelper } from '@/helpers/trimHelper'
import { uuidHelper } from '@/helpers/uuidHelper'

export class PixInformation {
  public readonly id: string;

  public key: string;
  public name: string;
  public city: string;
  public userId: string;

  constructor (props: Omit<PixInformation, 'id'>) {
    this.id = uuidHelper.create()
    this.name = trimHelper.oneSpace(props.name)
    this.key = trimHelper.oneSpace(props.key)
    this.city = trimHelper.oneSpace(props.city)
    this.userId = props.userId
  }
}
