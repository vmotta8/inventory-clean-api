import { trimHelper } from '@/helpers/trimHelper'

describe('trim helper', () => {
  it('should return a string without double spaces', () => {
    const name = 'Vinicius      Motta    '
    const trimName = trimHelper.oneSpace(name)
    expect(trimName).toBe('Vinicius Motta')
  })

  it('should return an error if the name is null', () => {
    try {
      const name = null
      const trimName = trimHelper.oneSpace(name)
      expect(trimName).toBe('Vinicius Motta')
    } catch (error) {
      expect(error.message).toEqual('Null or undefined is not accepted.')
    }
  })

  it('should return an error if the name is undefined', () => {
    try {
      const name = undefined
      const trimName = trimHelper.oneSpace(name)
      expect(trimName).toBe('Vinicius Motta')
    } catch (error) {
      expect(error.message).toEqual('Null or undefined is not accepted.')
    }
  })

  it('should return an error if the name is empty', () => {
    try {
      const name = ''
      const trimName = trimHelper.oneSpace(name)
      expect(trimName).toBe('Vinicius Motta')
    } catch (error) {
      expect(error.message).toEqual('Null or undefined is not accepted.')
    }
  })
})
