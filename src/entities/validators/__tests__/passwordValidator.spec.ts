import { passwordValidator } from '../passwordValidator'

describe('Password validator', () => {
  it('should return a error because password is invalid', () => {
    const password = '123 456'

    const valid = passwordValidator(password)

    expect(valid).toBe(false)
  })
})
