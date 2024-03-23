import { type Request, type Response } from 'express'
import jwt from 'jsonwebtoken'
import User from '../../models/user'
import { SECRET_JWT_KEY } from '../../utils/constants'
const bcrypt = require('bcrypt')

export default async (req: Request, res: Response) => {
  const { email, password } = req.body

  try {
    const user = await User.findOne({ where: { email } })

    if (user == null) {
      res.status(401).json({ message: 'Email hoặc mật khẩu không đúng!' })
      return
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password)

    if (!isPasswordCorrect) {
      res.status(401).json({ message: 'Email hoặc mật khẩu không đúng!' })
      return
    }

    const jwtToken = jwt.sign({
      email: user.email,
      provider: user.provider,
      id: user.id
    }, SECRET_JWT_KEY!, { expiresIn: '30d' })

    res.status(200).json({ message: 'Đăng nhập thành công!', token: jwtToken })
  } catch (error) {
    res.status(500).json({ message: 'Không ổn rồi đại vương ơi!' })
  }
}
