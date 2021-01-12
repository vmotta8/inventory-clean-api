import { MongoHelper } from '../../database'
import { authenticationUseCase } from './index'
import { createUserUseCase } from '../CreateUser/index'
import envs from '../../configs/envs.config'

beforeAll(async () => {
  await MongoHelper.connect(envs.MONGO_URL_TEST)
  MongoHelper.clearCollection('users')

  await createUserUseCase.execute({
    name: 'Vinicius Motta',
    email: 'viniciusmotta8@gmail.com',
    password: '123456'
  })
})

afterAll(async () => {
  await MongoHelper.disconnect()
})

describe('authentication use case', () => {
  it('email not found', async () => {
    try {
      await authenticationUseCase.execute({
        email: 'viniciusmotta8@email.com',
        password: '123456'
      })
    } catch (error) {
      expect(error.message).toEqual('Email not found.')
    }
  })

  it('wrong password', async () => {
    try {
      await authenticationUseCase.execute({
        email: 'viniciusmotta8@gmail.com',
        password: '12345678'
      })
    } catch (error) {
      expect(error.message).toEqual('Wrong password.')
    }
  })
})
