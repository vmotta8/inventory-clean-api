import { nameValidator } from '../nameValidator'

describe('Name validator', () => {
  it('should return a error because name is invalid', () => {
    const name = ''

    const valid = nameValidator(name)

    expect(valid).toBe(false)
  })
})
