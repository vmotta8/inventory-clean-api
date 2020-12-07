/* eslint-disable no-useless-constructor */
import { Request, Response } from 'express'
import { jwtHelper } from '../helpers/jwtHelper'
import { AuthenticationUseCase } from '../usecases/Authentication/AuthenticationUseCase'

export class AuthenticationController {
  constructor (
    private authenticationUseCase: AuthenticationUseCase
  ) {}

  async handle (request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body

    try {
      const user = await this.authenticationUseCase.execute({
        email,
        password
      })

      const token = jwtHelper.generateToken(user.id)

      return response.status(201).json({ user, token })
    } catch (err) {
      return response.status(400).json({ message: err.message || 'Unexpected error.' })
    }
  }
}
