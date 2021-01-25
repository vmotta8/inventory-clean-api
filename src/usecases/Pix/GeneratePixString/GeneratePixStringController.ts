/* eslint-disable no-useless-constructor */
import { Request, Response } from 'express'
import { GeneratePixStringUseCase } from '@/usecases/Pix/GeneratePixString/GeneratePixStringUseCase'

export class GeneratePixStringController {
  constructor (
    private generatePixStringUseCase: GeneratePixStringUseCase
  ) {}

  async handle (request: Request, response: Response): Promise<Response> {
    const { value } = request.body

    try {
      const data = await this.generatePixStringUseCase.execute({
        value,
        userId: request.userId
      })

      return response.status(201).json(data)
    } catch (err) {
      return response.status(400).json({ message: err.message || 'Unexpected error.' })
    }
  }
}
