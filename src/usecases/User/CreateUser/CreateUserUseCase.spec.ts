import envs from '@/configs/envs.config'
import { database } from '@/database'
import { TESTCreateUserUseCase } from '@/usecases/User/CreateUser'

beforeAll(async () => {
  await database.connect(envs.MONGO_URL_TEST)
})

beforeEach(async () => {
  database.clearCollection('pixinformation')
  database.clearCollection('users')
})

afterAll(async () => {
  await database.disconnect()
})

describe('create user use case', () => {
  it('should return an error if the email already exists', async () => {
    try {
      await TESTCreateUserUseCase.execute({
        name: 'Vinicius Motta',
        email: 'viniciusmotta8@gmail.com',
        password: '123456'
      })

      await TESTCreateUserUseCase.execute({
        name: 'Vinicius Motta',
        email: 'viniciusmotta8@gmail.com',
        password: '123456'
      })

      expect(1).toBe(0)
    } catch (error) {
      expect(error.message).toEqual('User already exists.')
    }
  })
})
