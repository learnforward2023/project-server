import express, { type Express, type Request, type Response } from 'express'
import db from './models'
import User from './models/user'
const router = express.Router()
const bcrypt = require('bcrypt')

const env: string = process.env.NODE_ENV ?? 'local'
// eslint-disable-next-line
const config = require('./config/config.js')[env];

const PORT = config.APPLICATION_PORT ?? 5100

const app: Express = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

router.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server')
})

router.post('/register', async (req: Request, res: Response) => {
  try {
    // Extract user data from request body
    const { email, password } = req.body

    // Validate input (e.g., check if email is unique, password meets requirements)
    // You may want to use a validation library like Joi for this

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10)

    // Create a new user in the database
    const user = await User.create({
      email,
      password: hashedPassword
    })

    // Return success response
    res.status(201).json({ message: 'User registered successfully', user })
  } catch (error) {
    // Handle errors
    res.status(500).json({ message: 'Internal server error' })
  }
})

db.sequelize.sync().then(() => {
  // eslint-disable-next-line
  console.log('Database connected!')
})

app.use(router)

app.listen(PORT, () => {
  // eslint-disable-next-line
  console.log(`[server]: Server is running at http://localhost:${PORT}`);
})
