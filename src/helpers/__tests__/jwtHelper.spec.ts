import { jwtHelper } from '@/helpers/jwtHelper'

interface TokenPayload {
  id: string
  iat: number
  exp: number
}

describe('jwt helper', () => {
  it('should return a string and equals return false', () => {
    const userId = '123456'
    const token = jwtHelper.generateToken(userId)
    const equals = userId === token
    expect(typeof token).toBe('string')
    expect(equals).toBe(false)
  })

  it('should return an object and equals return true', () => {
    const userId = '123456'
    const token = jwtHelper.generateToken(userId)
    const decoded = jwtHelper.verifyToken(token)
    const { id } = decoded as TokenPayload
    const equals = userId === id
    expect(typeof decoded).toBe('object')
    expect(equals).toBe(true)
  })
})
