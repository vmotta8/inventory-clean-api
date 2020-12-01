import jwt from 'jsonwebtoken'
import envs from '../../configs/envs.config'

export const jwtHelper = {
  generateToken (id: string): string {
    const token = jwt.sign({ id: id }, envs.SECRET_MD5, { expiresIn: '1d' })

    return token
  }
}
