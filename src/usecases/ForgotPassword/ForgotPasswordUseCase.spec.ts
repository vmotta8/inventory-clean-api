import { MongoHelper } from '../../database'
import { forgotPasswordUseCase } from './index'
import envs from '../../configs/envs.config'

beforeAll(async () => {
  await MongoHelper.connect(envs.MONGO_URL_TEST)
  MongoHelper.clearCollection('users')
})

afterAll(async () => {
  await MongoHelper.disconnect()
})

describe('create user use case', () => {
  it('user already exists', async () => {
    try {
      await forgotPasswordUseCase.execute({
        email: 'viniciusmotta8@gmail.com'
      })
    } catch (error) {
      expect(error.message).toEqual('User does not exist.')
    }
  })
})
