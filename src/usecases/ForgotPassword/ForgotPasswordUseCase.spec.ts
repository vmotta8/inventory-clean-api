import { TestUsersRepository } from '../../repositories/implementations/TestUsersRepository'
import { TestMailProvider } from '../../providers/implementations/TestMailProvider'
import { ForgotPasswordUseCase } from './ForgotPasswordUseCase'

const testUsersRepository = new TestUsersRepository()
const testMailProvider = new TestMailProvider()

const forgotPasswordUseCase = new ForgotPasswordUseCase(
  testUsersRepository,
  testMailProvider
)

describe('Forgot password use case', () => {
  it('should return a error because user does not exist', async () => {
    try {
      await forgotPasswordUseCase.execute({
        email: 'other@email.com'
      })
    } catch (err) {
      expect(err.message).toBe('User does not exist.')
    }
  })

  it('should return a success message', async () => {
    const data = await forgotPasswordUseCase.execute({
      email: 'vinicius@email.com'
    })

    expect(data.message).toBe('A new password was sent in your email, check the spam box.')
  })
})
