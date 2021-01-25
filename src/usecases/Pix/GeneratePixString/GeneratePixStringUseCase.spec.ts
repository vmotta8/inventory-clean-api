import envs from '@/configs/envs.config'
import { database } from '@/database'
import { TESTGeneratePixStringUseCase } from '@/usecases/Pix/GeneratePixString'

beforeAll(async () => {
  await database.connect(envs.MONGO_URL_TEST)
  database.clearCollection('pixinformation')
})

afterAll(async () => {
  await database.disconnect()
})

describe('generate pix string use case', () => {
  it('user did not register pix information', async () => {
    try {
      await TESTGeneratePixStringUseCase.execute({
        value: 10.5,
        userId: '123456'
      })
    } catch (error) {
      expect(error.message).toEqual('You must register your pix information first.')
    }
  })
})
