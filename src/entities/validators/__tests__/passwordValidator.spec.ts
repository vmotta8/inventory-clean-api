import { passwordValidator } from '@/entities/validators/passwordValidator'

describe('Password validator', () => {
  it('should return true for a valid password', () => {
    const password = '123456'
    const valid = passwordValidator(password)
    expect(valid).toBe(true)
  })

  it('should return an error because password is invalid', () => {
    const password = '123 456'
    const valid = passwordValidator(password)
    expect(valid).toBe(false)
  })

  it('should return an error because password is null', () => {
    const password = null
    const valid = passwordValidator(password)
    expect(valid).toBe(false)
  })

  it('should return an error because password is undefined', () => {
    const password = undefined
    const valid = passwordValidator(password)
    expect(valid).toBe(false)
  })

  it('should return an error because the password is less than 6 digits', () => {
    const password = '12345'
    const valid = passwordValidator(password)
    expect(valid).toBe(false)
  })
})
