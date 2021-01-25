import envs from '@/configs/envs.config'
import { database } from '@/database'
import { TESTUpdatePixInformationUseCase } from '@/usecases/Pix/UpdatePixInformation'
import { TESTRegisterPixInformationUseCase } from '@/usecases/Pix/RegisterPixInformation'

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

describe('update pix information use case', () => {
  it('should return an error if the user has not registered the information', async () => {
    try {
      await TESTUpdatePixInformationUseCase.execute({
        name: 'Vinicius Motta',
        key: 'viniciusmotta8@gmail.com',
        city: 'Mogi Mirim',
        userId: '12345678'
      })
    } catch (error) {
      expect(error.message).toEqual('Register information first.')
    }
  })

  it('should return an error if the key already exists', async () => {
    try {
      await TESTRegisterPixInformationUseCase.execute({
        name: 'Vinicius Motta',
        key: 'viniciusmotta8@gmail.com',
        city: 'Mogi Mirim',
        userId: '12345678'
      })

      await TESTUpdatePixInformationUseCase.execute({
        name: 'Vinicius Motta',
        key: 'viniciusmotta8@email.com',
        city: 'Mogi Mirim',
        userId: '12345678'
      })
    } catch (error) {
      expect(error.message).toEqual('Key already exists.')
    }
  })

  it('should return an error if any data is null', async () => {
    try {
      await TESTRegisterPixInformationUseCase.execute({
        name: 'Vinicius Motta',
        key: 'viniciusmotta8@gmail.com',
        city: 'Mogi Mirim',
        userId: '12345678'
      })

      await TESTUpdatePixInformationUseCase.execute({
        name: 'Vinicius Motta',
        key: 'viniciusmotta8@email.com',
        city: null,
        userId: '12345678'
      })
    } catch (error) {
      expect(error.message).toEqual('Null or undefined is not accepted.')
    }
  })

  it('should return an error if any data is undefined', async () => {
    try {
      await TESTRegisterPixInformationUseCase.execute({
        name: 'Vinicius Motta',
        key: 'viniciusmotta8@gmail.com',
        city: 'Mogi Mirim',
        userId: '12345678'
      })

      await TESTUpdatePixInformationUseCase.execute({
        name: 'Vinicius Motta',
        key: 'viniciusmotta8@email.com',
        city: undefined,
        userId: '12345678'
      })
    } catch (error) {
      expect(error.message).toEqual('Null or undefined is not accepted.')
    }
  })
})
