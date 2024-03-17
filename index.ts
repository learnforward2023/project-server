import express, { type Express } from 'express'
import db from './models'
import rootRouter from './routes'
const router = express.Router()

const env: string = process.env.NODE_ENV ?? 'local'
// eslint-disable-next-line
const config = require('./config/config.js')[env];
const PORT = config.APPLICATION_PORT ?? 5100
const app: Express = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

rootRouter(router)

app.use(router)

db.sequelize.sync().then(() => {
  // eslint-disable-next-line
  console.log('Database connected!')
})

app.listen(PORT, () => {
  // eslint-disable-next-line
  console.log(`[server]: Server is running at http://localhost:${PORT}`);
})
