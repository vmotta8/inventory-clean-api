import { database } from './database/index'
import { app } from './app'
import envs from './configs/envs.config'

database.connect(envs.MONGO_URL)

app.listen(3333)
