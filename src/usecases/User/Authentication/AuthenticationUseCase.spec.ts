import envs from '@/configs/envs.config'
import { database } from '@/database'
import { TESTAuthenticationUseCase } from '@/usecases/User/Authentication'
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

describe('should return an error if the email does not exist', () => {
  it('email not found', async () => {
    try {
      await TESTAuthenticationUseCase.execute({
        email: 'viniciusmotta8@email.com',
        password: '123456'
      })

      expect(1).toBe(0)
    } catch (error) {
      expect(error.message).toEqual('Email not found.')
    }
  })

  it('should return an error if the password was wrong', async () => {
    try {
      await TESTCreateUserUseCase.execute({
        name: 'Vinicius Motta',
        email: 'viniciusmotta8@gmail.com',
        password: '123456'
      })

      await TESTAuthenticationUseCase.execute({
        email: 'viniciusmotta8@gmail.com',
        password: '12345678'
      })

      expect(1).toBe(0)
    } catch (error) {
      expect(error.message).toEqual('Wrong password.')
    }
  })
})
