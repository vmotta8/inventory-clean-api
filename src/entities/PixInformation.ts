import { uuidHelper } from './helpers/uuidHelper'

export class PixInformation {
  public readonly id: string;

  public key: string;
  public name: string;
  public city: string;
  public userId: string;

  constructor (props: Omit<PixInformation, 'id'>) {
    Object.assign(this, props)
    this.id = uuidHelper.create()
  }
}
