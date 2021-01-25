import { database } from '@/database/index'
import { app } from '@/app'
import envs from '@/configs/envs.config'

database.connect(envs.MONGO_URL).then(() => console.log('Database connected.'))

app.listen(3333)
