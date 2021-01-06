import { MongoHelper } from '../../database'
import { updatePixInformationUseCase } from './index'
import { registerPixInformationUseCase } from '../RegisterPixInformation/index'
import envs from '../../configs/envs.config'

beforeAll(async () => {
  await MongoHelper.connect(envs.MONGO_URL_TEST)
  MongoHelper.clearCollection('pixinformation')

  await registerPixInformationUseCase.execute({
    name: 'Vinicius Motta',
    key: 'viniciusmotta8@gmail.com',
    city: 'Mogi Mirim',
    userId: '123456'
  })

  await registerPixInformationUseCase.execute({
    name: 'User',
    key: 'user@email.com',
    city: 'Mogi Mirim',
    userId: '1234'
  })
})

afterAll(async () => {
  await MongoHelper.disconnect()
})

describe('update pix information use case', () => {
  it('user did not register pix information', async () => {
    try {
      await updatePixInformationUseCase.execute({
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
      await updatePixInformationUseCase.execute({
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
