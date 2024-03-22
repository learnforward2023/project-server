import { type Request, type Response } from 'express'
import jwt from 'jsonwebtoken'

import axios from 'axios'
import User from '../../models/user'
import {
  FACEBOOK_CLIENT_ID,
  FACEBOOK_CLIENT_SECRET,
  FACEBOOK_REDIRECT_URI,
  SECRET_JWT_KEY
} from '../../utils/constants'
import { ApplicationConfig } from '../../utils/config'

export default async (req: Request, res: Response) => {
  const { code } = req.query

  try {
    const { data } = await axios.post(
      'https://graph.facebook.com/v12.0/oauth/access_token',
      {
        // eslint-disable-next-line
        client_id: FACEBOOK_CLIENT_ID,
        // eslint-disable-next-line
        client_secret: FACEBOOK_CLIENT_SECRET,
        code,
        // eslint-disable-next-line
        redirect_uri: FACEBOOK_REDIRECT_URI,
      }
    )

    const accessToken = data.access_token
    const facebookUserResponse = await axios.get(
      `https://graph.facebook.com/v12.0/me?fields=id,name,email&access_token=${accessToken}`
    )

    const facebookUserData = facebookUserResponse.data

    let user = await User.findOne({
      where: { providerId: facebookUserData.id }
    })

    if (user == null) {
      const randomPassword = Math.random().toString(36).slice(-8)

      user = await User.create({
        email: facebookUserData.email,
        name: facebookUserData.name,
        password: randomPassword,
        providerId: facebookUserData.id,
        provider: 'facebook'
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

    res.redirect(
      `${ApplicationConfig.authRedirectSuccessUrl}?token=${jwtToken}`
    )
  } catch (error) {
    res.status(500).send('An error occurred')
  }
}
