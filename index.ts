import express, { type Express, type Request, type Response } from 'express'
import { connect } from './database/index'

import dotenv from 'dotenv'

dotenv.config({ path: `.env.${process.env.NODE_ENV}` })

const PORT = process.env.APPLICATION_PORT ?? 5000

const app: Express = express()

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server')
})

// eslint-disable-next-line
connect()

app.listen(PORT, () => {
  // eslint-disable-next-line
	console.log(`[server]: Server is running at http://localhost:${PORT}`);
})
