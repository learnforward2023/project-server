import { type Request, type Response } from 'express'
import { type ValidationError } from 'sequelize'
import User from '../../models/user'
import jwt from 'jsonwebtoken'
import { SECRET_JWT_KEY } from '../../utils/constants'

export default async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body

    const user = await User.create({ email, password })

    const jwtToken = jwt.sign({
      email: user.email,
      provider: user.provider,
      id: user.id
    }, SECRET_JWT_KEY!, { expiresIn: '30d' })

    res.status(200).json({ message: 'Đăng ký tài khoản mới thành công', token: jwtToken })
  } catch (error: any) {
    if (error.name === 'SequelizeValidationError') {
      const validationErrors = error.errors.map((err: ValidationError) => err.message)

      res.status(400).json({ message: 'Validation error', errors: validationErrors })
    } else {
      res.status(500).json({ message: 'Không ổn rồi đại vương ơi!', error: error.message })
    }
  }
}
