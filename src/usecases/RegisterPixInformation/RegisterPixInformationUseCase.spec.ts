import { database } from '../../database/index'
import { TESTRegisterPixInformationUseCase } from './index'
import envs from '../../configs/envs.config'

beforeAll(async () => {
  await database.connect(envs.MONGO_URL_TEST)
  database.clearCollection('pixinformation')

  await TESTRegisterPixInformationUseCase.execute({
    name: 'Vinicius Motta',
    key: 'viniciusmotta8@gmail.com',
    city: 'Mogi Mirim',
    userId: '123456'
  })
})

afterAll(async () => {
  await database.disconnect()
})

describe('register pix information use case', () => {
  it('key already exists', async () => {
    try {
      await TESTRegisterPixInformationUseCase.execute({
        name: 'Vinicius Motta',
        key: 'viniciusmotta8@gmail.com',
        city: 'Mogi Mirim',
        userId: '12345678'
      })
    } catch (error) {
      expect(error.message).toEqual('Key already exists.')
    }
  })

  it('userId already exists', async () => {
    try {
      await TESTRegisterPixInformationUseCase.execute({
        name: 'Vinicius Motta',
        key: 'viniciusmotta8@email.com',
        city: 'Mogi Mirim',
        userId: '123456'
      })
    } catch (error) {
      expect(error.message).toEqual('User id already exists.')
    }
  })
})
