import { MongoHelper } from './database'
import { app } from './app'
import envs from './configs/envs.config'

MongoHelper.connect(envs.MONGO_URL)

app.listen(3333)
