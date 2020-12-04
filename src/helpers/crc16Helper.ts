export const crc16Helper = {
  generate (charach: string): string {
    var crc = 0xFFFF
    var polynomial = 0x1021
    var i = 0; var k = 0; var byte_val; var bit; var c15

    for (; i < charach.length; i++) {
      byte_val = charach[i].charCodeAt(0)

      for (k = 0; k < 8; k++) {
        bit = ((byte_val >> (7 - k) & 1) === 1)
        c15 = ((crc >> 15 & 1) === 1)
        crc <<= 1
        if (c15 !== bit) {
          crc ^= polynomial
        }
      }
    }
    crc &= 0xffff

    return (crc.toString(16)).toUpperCase()
  }
}
