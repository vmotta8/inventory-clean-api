import { emailValidator } from '../emailValidator'

describe('Email validator', () => {
  it('should return a error because email is invalid', () => {
    const email = 'vinicius@emailcom'

    const valid = emailValidator(email)

    expect(valid).toBe(false)
  })
})
