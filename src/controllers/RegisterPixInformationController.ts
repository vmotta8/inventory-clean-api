/* eslint-disable no-useless-constructor */
import { Request, Response } from 'express'
import { RegisterPixInformationUseCase } from '../usecases/RegisterPixInformation/RegisterPixInformationUseCase'

export class RegisterPixInformationController {
  constructor (
    private registerPixInformationUseCase: RegisterPixInformationUseCase
  ) {}

  async handle (request: Request, response: Response): Promise<Response> {
    const { key, name, city } = request.body

    try {
      const data = await this.registerPixInformationUseCase.execute({
        key,
        name,
        city,
        userId: request.userId
      })

      return response.status(201).json(data)
    } catch (err) {
      return response.status(400).json({ message: err.message || 'Unexpected error.' })
    }
  }
}
