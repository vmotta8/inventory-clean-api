import { MongoHelper } from '../../database'
import { TESTCreateUserUseCase } from './index'
import envs from '../../configs/envs.config'

beforeAll(async () => {
  await MongoHelper.connect(envs.MONGO_URL_TEST)
  MongoHelper.clearCollection('users')

  await TESTCreateUserUseCase.execute({
    name: 'Vinicius Motta',
    email: 'viniciusmotta8@gmail.com',
    password: '123456'
  })
})

afterAll(async () => {
  await MongoHelper.disconnect()
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
