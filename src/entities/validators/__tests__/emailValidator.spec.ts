import { emailValidator } from '../emailValidator'

describe('Email validator', () => {
  it('should a valid email', () => {
    const email = 'vinicius@email.com'

    const valid = emailValidator(email)

    expect(valid).toBe(true)
  })

  it('should return a error because email is invalid 1', () => {
    const email = 'vinicius@emailcom'

    const valid = emailValidator(email)

    expect(valid).toBe(false)
  })

  it('should return a error because email is invalid 2', () => {
    const email = 'viniciusemail.com'

    const valid = emailValidator(email)

    expect(valid).toBe(false)
  })

  it('should return a error because email is invalid 3', () => {
    const email = 'vinicius'

    const valid = emailValidator(email)

    expect(valid).toBe(false)
  })
})
