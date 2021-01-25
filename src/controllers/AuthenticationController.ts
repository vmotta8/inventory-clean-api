/* eslint-disable no-useless-constructor */
import { Request, Response } from 'express'
import { AuthenticationUseCase } from '@/usecases/User/Authentication/AuthenticationUseCase'

export class AuthenticationController {
  constructor (
    private authenticationUseCase: AuthenticationUseCase
  ) {}

  async handle (request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body

    try {
      const data = await this.authenticationUseCase.execute({
        email,
        password
      })

      return response.status(201).json(data)
    } catch (err) {
      return response.status(400).json({ message: err.message || 'Unexpected error.' })
    }
  }
}
