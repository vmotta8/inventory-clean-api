import { MongoHelper } from '../../database'
import { generatePixStringUseCase } from './index'
import envs from '../../configs/envs.config'

beforeAll(async () => {
  await MongoHelper.connect(envs.MONGO_URL_TEST)
  MongoHelper.clearCollection('pixinformation')
})

afterAll(async () => {
  await MongoHelper.disconnect()
})

describe('generate pix string use case', () => {
  it('user did not register pix information', async () => {
    try {
      await generatePixStringUseCase.execute({
        value: 10.5,
        userId: '123456'
      })
    } catch (error) {
      expect(error.message).toEqual('You must register your pix information first.')
    }
  })
})
