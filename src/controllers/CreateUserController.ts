/* eslint-disable no-useless-constructor */
import { Request, Response } from 'express'
import { jwtHelper } from './helpers/jwtHelper'
import { CreateUserUseCase } from '../usecases/CreateUser/CreateUserUseCase'

export class CreateUserController {
  constructor (
    private createUserUseCase: CreateUserUseCase
  ) {}

  async handle (request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body

    try {
      const data = await this.createUserUseCase.execute({
        name,
        email,
        password
      })

      const token = jwtHelper.generateToken(data.user.id)

      return response.status(201).json({ user: data.user, token })
    } catch (err) {
      return response.status(400).json({ message: err.message || 'Unexpected error.' })
    }
  }
}