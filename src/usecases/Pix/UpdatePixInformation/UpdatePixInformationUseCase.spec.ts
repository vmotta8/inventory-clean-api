import envs from '@/configs/envs.config'
import { database } from '@/database'
import { TESTUpdatePixInformationUseCase } from '@/usecases/Pix/UpdatePixInformation'
import { TESTRegisterPixInformationUseCase } from '@/usecases/Pix/RegisterPixInformation'

beforeAll(async () => {
  await database.connect(envs.MONGO_URL_TEST)
  database.clearCollection('pixinformation')

  await TESTRegisterPixInformationUseCase.execute({
    name: 'Vinicius Motta',
    key: 'viniciusmotta8@gmail.com',
    city: 'Mogi Mirim',
    userId: '123456'
  })

  await TESTRegisterPixInformationUseCase.execute({
    name: 'User',
    key: 'user@email.com',
    city: 'Mogi Mirim',
    userId: '1234'
  })
})

afterAll(async () => {
  await database.disconnect()
})

describe('update pix information use case', () => {
  it('user did not register pix information', async () => {
    try {
      await TESTUpdatePixInformationUseCase.execute({
        name: 'Other',
        key: 'other@email.com',
        city: 'Mogi Mirim',
        userId: '12345678'
      })
    } catch (error) {
      expect(error.message).toEqual('Register information first.')
    }
  })

  it('key already exists', async () => {
    try {
      await TESTUpdatePixInformationUseCase.execute({
        name: 'User',
        key: 'viniciusmotta8@gmail.com',
        city: 'Mogi Mirim',
        userId: '1234'
      })
    } catch (error) {
      expect(error.message).toEqual('Key already exists.')
    }
  })
})