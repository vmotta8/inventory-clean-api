import { nameValidator } from '../nameValidator'

describe('Name validator', () => {
  it('should return a error because name is invalid empty', () => {
    const name = ''
    const valid = nameValidator(name)
    expect(valid).toBe(false)
  })
  it('should not create user with invalid name too few', () => {
    const name = 'O     '
    const valid = nameValidator(name)
    expect(valid).toBe(false)
  })

  it('should not create user with invalid name too many', () => {
    const name = 'O'.repeat(257)
    const valid = nameValidator(name)
    expect(valid).toBe(false)
  })
})
