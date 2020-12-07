import bcrypt from 'bcrypt'

export const bcryptHelper = {
  generateHash (password: string): string {
    const hash = bcrypt.hashSync(password, 10)

    return hash
  },

  async compare (password: string, hash: string): Promise<boolean> {
    const valid = await bcrypt.compare(password, hash)

    return valid
  }
}
