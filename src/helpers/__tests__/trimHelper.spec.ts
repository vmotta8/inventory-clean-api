import { trimHelper } from '@/helpers/trimHelper'

describe('trim helper', () => {
  it('should return a string without double spaces', () => {
    const name = 'Vinicius      Motta    '
    const trimName = trimHelper.oneSpace(name)
    expect(trimName).toBe('Vinicius Motta')
  })
})
