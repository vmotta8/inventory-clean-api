import envs from '@/configs/envs.config'
import { database } from '@/database'
import { TESTForgotPasswordUseCase } from '@/usecases/User/ForgotPassword'

beforeAll(async () => {
  await database.connect(envs.MONGO_URL_TEST)
  database.clearCollection('users')
})

afterAll(async () => {
  await database.disconnect()
})

describe('forgot password use case', () => {
  it('user does not exist', async () => {
    try {
      await TESTForgotPasswordUseCase.execute({
        email: 'viniciusmotta8@gmail.com'
      })
    } catch (error) {
      expect(error.message).toEqual('User does not exist.')
    }
  })
})
