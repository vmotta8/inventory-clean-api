import { TestUsersRepository } from '../../repositories/implementations/TestUsersRepository'
import { TestMailProvider } from '../../providers/implementations/TestMailProvider'
import { CreateUserUseCase } from './CreateUserUseCase'

const testUsersRepository = new TestUsersRepository()
const testMailProvider = new TestMailProvider()

const createUserUseCase = new CreateUserUseCase(
  testUsersRepository,
  testMailProvider
)

beforeAll(async () => {
  await createUserUseCase.execute({
    name: 'Vinicius',
    email: 'vinicius@email.com',
    password: '123456'
  })
})

describe('Create user use case', () => {
  it('should return a error because user already exists', async () => {
    try {
      await createUserUseCase.execute({
        name: 'Vinicius',
        email: 'vinicius@email.com',
        password: '123456'
      })
    } catch (err) {
      expect(err.message).toBe('User already exists.')
    }
  })

  it('should return a error because name is invalid', async () => {
    try {
      await createUserUseCase.execute({
        name: '',
        email: 'vinicius1@email.com',
        password: '123456'
      })
    } catch (err) {
      expect(err.message).toBe('Invalid name.')
    }
  })

  it('should return a error because email is invalid', async () => {
    try {
      await createUserUseCase.execute({
        name: 'Vinicius',
        email: 'vinicius2@emailcom',
        password: '123456'
      })
    } catch (err) {
      expect(err.message).toBe('Invalid email.')
    }
  })

  it('should return a error because password is invalid', async () => {
    try {
      await createUserUseCase.execute({
        name: 'Vinicius',
        email: 'vinicius3@email.com',
        password: '123 456'
      })
    } catch (err) {
      expect(err.message).toBe('Invalid password.')
    }
  })
})
