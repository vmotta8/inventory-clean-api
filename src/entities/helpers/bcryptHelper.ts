import bcrypt from 'bcrypt'

export const bcryptHelper = {
  generateHash (password: string): string {
    const hash = bcrypt.hashSync(password, 10)

    return hash
  }
}
