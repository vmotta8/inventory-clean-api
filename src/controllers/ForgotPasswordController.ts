/* eslint-disable no-useless-constructor */
import { Request, Response } from 'express'
import { ForgotPasswordUseCase } from '@/usecases/ForgotPassword/ForgotPasswordUseCase'

export class ForgotPasswordController {
  constructor (
    private forgotPasswordUseCase: ForgotPasswordUseCase
  ) {}

  async handle (request: Request, response: Response): Promise<Response> {
    const { email } = request.body

    try {
      await this.forgotPasswordUseCase.execute({
        email
      })

      return response.status(201).send()
    } catch (err) {
      return response.status(400).json({ message: err.message || 'Unexpected error.' })
    }
  }
}
