import { nameValidator } from '@/entities/validators/nameValidator'

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

  it('should not create user with invalid name null', () => {
    const name = null
    const valid = nameValidator(name)
    expect(valid).toBe(false)
  })

  it('should not create user with invalid name undefined', () => {
    const name = undefined
    const valid = nameValidator(name)
    expect(valid).toBe(false)
  })

  it('should return true when name is valid 1', () => {
    const name = 'My    Name'
    const valid = nameValidator(name)
    expect(valid).toBe(true)
  })

  it('should return true when name is valid 2', () => {
    const name = 'My Name'
    const valid = nameValidator(name)
    expect(valid).toBe(true)
  })
})
