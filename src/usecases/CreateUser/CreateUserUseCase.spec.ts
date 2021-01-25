import envs from '@/configs/envs.config'
import { database } from '@/database'
import { TESTCreateUserUseCase } from '@/usecases/CreateUser'

beforeAll(async () => {
  await database.connect(envs.MONGO_URL_TEST)
  database.clearCollection('users')

  await TESTCreateUserUseCase.execute({
    name: 'Vinicius Motta',
    email: 'viniciusmotta8@gmail.com',
    password: '123456'
  })
})

afterAll(async () => {
  await database.disconnect()
})

describe('create user use case', () => {
  it('user already exists', async () => {
    try {
      await TESTCreateUserUseCase.execute({
        name: 'Vinicius Motta',
        email: 'viniciusmotta8@gmail.com',
        password: '123456'
      })
    } catch (error) {
      expect(error.message).toEqual('User already exists.')
    }
  })
})
