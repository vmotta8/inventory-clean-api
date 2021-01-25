/* eslint-disable no-useless-constructor */
import { Request, Response } from 'express'
import { UpdatePixInformationUseCase } from '@/usecases/Pix/UpdatePixInformation/UpdatePixInformationUseCase'

export class UpdatePixInformationController {
  constructor (
    private updatePixInformationUseCase: UpdatePixInformationUseCase
  ) {}

  async handle (request: Request, response: Response): Promise<Response> {
    const { key, name, city } = request.body

    try {
      await this.updatePixInformationUseCase.execute({
        key,
        name,
        city,
        userId: request.userId
      })

      return response.status(201).send()
    } catch (err) {
      return response.status(400).json({ message: err.message || 'Unexpected error.' })
    }
  }
}
