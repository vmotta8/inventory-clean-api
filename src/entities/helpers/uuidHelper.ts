import { uuid } from 'uuidv4'

export const uuidHelper = {
  create (): string {
    const id = uuid()

    return id
  }
}
