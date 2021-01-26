import envs from '@/configs/envs.config'
import { database } from '@/database'
import { TESTForgotPasswordUseCase } from '@/usecases/User/ForgotPassword'

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

describe('forgot password use case', () => {
  it('should return an error if email does not exist', async () => {
    try {
      await TESTForgotPasswordUseCase.execute({
        email: 'viniciusmotta8@gmail.com'
      })

      expect(1).toBe(0)
    } catch (error) {
      expect(error.message).toEqual('User does not exist.')
    }
  })
})
