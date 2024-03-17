import { type Request, type Response } from 'express'
import User from '../../models/user'
const bcrypt = require('bcrypt')

export default async (req: Request, res: Response) => {
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
}
