import envs from '@/configs/envs.config'
import { database } from '@/database'
import { TESTAuthenticationUseCase } from '@/usecases/User/Authentication'
import { TESTCreateUserUseCase } from '@/usecases/User/CreateUser'

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

describe('authentication use case', () => {
  it('email not found', async () => {
    try {
      await TESTAuthenticationUseCase.execute({
        email: 'viniciusmotta8@email.com',
        password: '123456'
      })
    } catch (error) {
      expect(error.message).toEqual('Email not found.')
    }
  })

  it('wrong password', async () => {
    try {
      await TESTAuthenticationUseCase.execute({
        email: 'viniciusmotta8@gmail.com',
        password: '12345678'
      })
    } catch (error) {
      expect(error.message).toEqual('Wrong password.')
    }
  })
})