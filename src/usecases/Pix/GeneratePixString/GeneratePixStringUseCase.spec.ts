import envs from '@/configs/envs.config'
import { database } from '@/database'
import { TESTGeneratePixStringUseCase } from '@/usecases/Pix/GeneratePixString'
import { TESTRegisterPixInformationUseCase } from '@/usecases/Pix/RegisterPixInformation'
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

describe('generate pix string use case', () => {
  it('should return an error if the user has not registered the information', async () => {
    try {
      await TESTGeneratePixStringUseCase.execute({
        value: 10.5,
        userId: '123456'
      })
    } catch (error) {
      expect(error.message).toEqual('You must register your pix information first.')
    }
  })

  it('should return a string with the pix data', async () => {
    const { user } = await TESTCreateUserUseCase.execute({
      name: 'Vinicius Motta',
      email: 'viniciusmotta8@gmail.com',
      password: '123456'
    })

    await TESTRegisterPixInformationUseCase.execute({
      name: 'Vinicius Motta',
      key: 'viniciusmotta8@gmail.com',
      city: 'Mogi Mirim',
      userId: user.id
    })

    const pixString = await TESTGeneratePixStringUseCase.execute({
      value: 10.5,
      userId: user.id
    })

    expect(pixString).toBe('00020101021226460014br.gov.bcb.pix0124viniciusmotta8@gmail.com520400005303986540510.505802BR5914Vinicius Motta6010Mogi Mirim63044B4A')
  })
})
