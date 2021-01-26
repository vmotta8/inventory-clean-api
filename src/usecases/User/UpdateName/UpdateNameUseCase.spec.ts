import envs from '@/configs/envs.config'
import { database } from '@/database'
import { TESTupdateNameUseCase } from '@/usecases/User/UpdateName'
import { TESTCreateUserUseCase } from '@/usecases/User/CreateUser'
import { TESTAuthenticationUseCase } from '@/usecases/User/Authentication'

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

describe('update name use case', () => {
  it('invalid name', async () => {
    try {
      await TESTCreateUserUseCase.execute({
        name: 'Vinicius Motta',
        email: 'viniciusmotta8@gmail.com',
        password: '123456'
      })

      const data = await TESTAuthenticationUseCase.execute({
        email: 'viniciusmotta8@gmail.com',
        password: '123456'
      })

      await TESTupdateNameUseCase.execute({
        name: undefined,
        userId: data.user.id
      })

      expect(1).toBe(0)
    } catch (error) {
      expect(error.message).toEqual('Invalid name.')
    }
  })
})
