/* eslint-disable no-useless-constructor */
import { Request, Response } from 'express'
import { ChangePasswordUseCase } from '@/usecases/User/ChangePassword/ChangePasswordUseCase'

export class ChangePasswordController {
  constructor (
    private changePasswordUseCase: ChangePasswordUseCase
  ) {}

  async handle (request: Request, response: Response): Promise<Response> {
    const { password } = request.body

    try {
      await this.changePasswordUseCase.execute({
        password,
        userId: request.userId
      })

      return response.status(201).send()
    } catch (err) {
      return response.status(400).json({ message: err.message || 'Unexpected error.' })
    }
  }
}
