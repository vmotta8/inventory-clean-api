import { uuid } from 'uuidv4'

export class PixInformation {
  public readonly id: string;

  public key: string;
  public name: string;
  public city: string;
  public userId: string;

  constructor (props: Omit<PixInformation, 'id'>, id?: string) {
    Object.assign(this, props)

    if (!id) {
      this.id = uuid()
    }
  }
}
