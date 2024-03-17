import { type Request, type Response } from 'express'
import { type ValidationError } from 'sequelize'
import User from '../../models/user'

export default async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body

    const user = await User.create({ email, password })

    res.status(201).json({ message: 'Đăng ký tài khoản mới thành công', user })
  } catch (error: any) {
    if (error.name === 'SequelizeValidationError') {
      const validationErrors = error.errors.map((err: ValidationError) => err.message)

      res.status(400).json({ message: 'Validation error', errors: validationErrors })
    } else {
      res.status(500).json({ message: 'Không ổn rồi đại vương ơi!', error: error.message })
    }
  }
}
