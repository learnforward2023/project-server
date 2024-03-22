import { type Request, type Response } from 'express'
import jwt from 'jsonwebtoken'

import axios from 'axios'
import User from '../../models/user'
import {
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  GOOGLE_REDIRECT_URI,
  SECRET_JWT_KEY
} from '../../utils/constants'
import { ApplicationConfig } from '../../utils/config'

export default async (req: Request, res: Response) => {
  const { code } = req.query

  try {
    const { data } = await axios.post('https://oauth2.googleapis.com/token', {
      // eslint-disable-next-line
      client_id: GOOGLE_CLIENT_ID,
      // eslint-disable-next-line
      client_secret: GOOGLE_CLIENT_SECRET,
      code,
      // eslint-disable-next-line
      redirect_uri: GOOGLE_REDIRECT_URI,
      // eslint-disable-next-line
      grant_type: "authorization_code",
    })

    const accessToken = data.access_token
    const googleUserResponse = await axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${accessToken}`)

    const googleUserData = googleUserResponse.data

    let user = await User.findOne({ where: { providerId: googleUserData.id } })

    if (user == null) {
      const email = `google.${googleUserData.id}@study.together`
      const randomPassword = Math.random().toString(36).slice(-8)

      user = await User.create({
        email,
        name: googleUserData.name,
        password: randomPassword,
        providerId: googleUserData.id,
        provider: 'google'
      })
    }
    const jwtToken = jwt.sign(
      {
        email: user.email,
        provider: user.provider,
        id: user.id
      },
      SECRET_JWT_KEY!,
      { expiresIn: '30d' }
    )

    res.redirect(`${ApplicationConfig.authRedirectSuccessUrl}?token=${jwtToken}`)
  } catch (error) {
    res.status(500).send('Không ổn rồi đại vương ơi!')
  }
}
