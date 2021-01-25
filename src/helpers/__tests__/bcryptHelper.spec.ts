import { bcryptHelper } from '@/helpers/bcryptHelper'

describe('bcrypt helper', () => {
  it('should return a string and equals return false', () => {
    const password = '123456'
    const encrypted = bcryptHelper.generateHash(password)
    const equals = password === encrypted
    expect(equals).toBe(false)
  })

  it('should return true when comparing hash and password', async () => {
    const password = '123456'
    const encrypted = bcryptHelper.generateHash(password)
    const equals = await bcryptHelper.compare(password, encrypted)
    expect(equals).toBe(true)
  })
})
