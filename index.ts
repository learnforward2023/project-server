import express, { type Express, type Request, type Response } from 'express'
import db from './models'

const env: string = process.env.NODE_ENV ?? 'local'
// eslint-disable-next-line
const config = require('./config/config.js')[env];

const PORT = config.APPLICATION_PORT ?? 5100

const app: Express = express()

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server')
})

db.sequelize.sync().then(() => {
  // eslint-disable-next-line
  console.log('Database connected!')
})

app.listen(PORT, () => {
  // eslint-disable-next-line
	console.log(`[server]: Server is running at http://localhost:${PORT}`);
})
