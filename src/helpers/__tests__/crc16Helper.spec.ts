import { crc16Helper } from '@/helpers/crc16Helper'

describe('crc16 helper', () => {
  it('should return a string and right value', () => {
    const data = '00020101021126440014br.gov.bcb.spi0122fulano2019@example.com5204000053039865802BR5913FULANO DE TAL6008BRASILIA6304'
    const crc = crc16Helper.generate(data)
    expect(typeof crc).toBe('string')
    expect(crc).toBe('DFE3')
  })
})
