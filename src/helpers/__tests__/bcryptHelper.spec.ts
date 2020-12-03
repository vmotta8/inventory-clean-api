import { bcryptHelper } from '../bcryptHelper'

function Equals (password: string, encrypted: string): boolean {
  if (password === encrypted) {
    return true
  }

  return false
}

describe('bcrypt helper', () => {
  it('should return a string and equals return false', () => {
    const password = '123456'
    const encrypted = bcryptHelper.generateHash(password)
    const equals = Equals(password, encrypted)
    expect(typeof encrypted).toBe('string')
    expect(equals).toBe(false)
  })
})
