/* eslint-disable no-useless-constructor */
import { Request, Response } from 'express'
import { UpdateNameUseCase } from '@/usecases/User/UpdateName/UpdateUserUseCase'

export class UpdateNameController {
  constructor (
    private updateNameUseCase: UpdateNameUseCase
  ) {}

  async handle (request: Request, response: Response): Promise<Response> {
    const { name } = request.body

    try {
      await this.updateNameUseCase.execute({
        name,
        userId: request.userId
      })

      return response.status(201).send()
    } catch (err) {
      return response.status(400).json({ message: err.message || 'Unexpected error.' })
    }
  }
}
