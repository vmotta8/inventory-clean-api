import { TestPixInformationRepository } from '../../repositories/implementations/TestPixInformationRepository'
import { RegisterPixInformationUseCase } from './RegisterPixInformationUseCase'

const testPixInformationRepository = new TestPixInformationRepository()

const registerPixInformationUseCase = new RegisterPixInformationUseCase(
  testPixInformationRepository
)

beforeAll(async () => {
  await registerPixInformationUseCase.execute({
    key: '123456',
    name: 'Vinicius',
    city: 'São Paulo',
    userId: '123-456'
  })
})

describe('Create user use case', () => {
  it('should return a error because key already exists', async () => {
    try {
      await registerPixInformationUseCase.execute({
        key: '123456',
        name: 'Vinicius',
        city: 'São Paulo',
        userId: '123456'
      })
    } catch (err) {
      expect(err.message).toBe('Key already exists.')
    }
  })

  it('should return a error because user id already exists', async () => {
    try {
      await registerPixInformationUseCase.execute({
        key: '123-456',
        name: 'Vinicius',
        city: 'São Paulo',
        userId: '123-456'
      })
    } catch (err) {
      expect(err.message).toBe('User id already exists.')
    }
  })
})
