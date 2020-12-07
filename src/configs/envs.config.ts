import dotenv from 'dotenv'
dotenv.config()

export default {
  SECRET_MD5: process.env.SECRET_MD5,
  MONGO_URL: process.env.MONGO_URL,
  AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
  EMAIL: process.env.EMAIL
}
