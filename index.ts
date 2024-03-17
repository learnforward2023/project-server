import express, { type Express } from 'express'
import db from './models'
import rootRouter from './routes'
const router = express.Router()

const PORT = 8080
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
