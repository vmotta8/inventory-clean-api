import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import envs from '../configs/envs.config'

interface TokenPayload {
  id: string
  iat: number
  exp: number
}

export default function AuthMiddleware (req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers

  if (!authorization) {
    return res.status(401).send({ message: 'No token provided' })
  }

  const parts = authorization.split(' ')

  if (parts.length !== 2) {
    return res.status(401).send({ message: 'Token error' })
  }

  const token = authorization.replace('Bearer', '').trim()

  try {
    const data = jwt.verify(token, envs.SECRET_MD5)

    const { id } = data as TokenPayload

    req.userId = id

    return next()
  } catch {
    return res.status(401).send({ message: 'Token invalid' })
  }
}
