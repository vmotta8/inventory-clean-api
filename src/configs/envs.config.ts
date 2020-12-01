import dotenv from 'dotenv'
dotenv.config()

export default {
  SECRET_MD5: process.env.SECRET_MD5,
  MONGO_URL: process.env.MONGO_URL
}
