import jwt from 'jsonwebtoken'
import envs from '@/configs/envs.config'

export const jwtHelper = {
  generateToken (id: string): string {
    const token = jwt.sign({ id: id }, envs.SECRET_MD5, { expiresIn: '1d' })

    return token
  },

  verifyToken (token: string): object {
    const decoded = jwt.verify(token, envs.SECRET_MD5)
    if (typeof decoded !== 'object') {
      throw new Error('Token verification error')
    }

    return decoded
  }
}
