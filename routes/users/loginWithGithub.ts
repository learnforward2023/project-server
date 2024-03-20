import { type Request, type Response } from 'express'
import axios from 'axios'
import User from '../../models/user'
import { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } from '../../utils/constants'

export default async (req: Request, res: Response) => {
  try {
    const code = req.query.code

    const body = {
      // eslint-disable-next-line
      client_id: GITHUB_CLIENT_ID,
      // eslint-disable-next-line
      client_secret: GITHUB_CLIENT_SECRET,
      code
    }
    const opts = { headers: { accept: 'application/json' } }
    const response = await axios.post(
      'https://github.com/login/oauth/access_token',
      body,
      opts
    )
    const accessToken = response.data.access_token

    const githubUserResponse = await axios.get('https://api.github.com/user', {
      headers: {
        Authorization: `token ${accessToken}`
      }
    })

    const githubUserData = githubUserResponse.data

    let user = await User.findOne({ where: { providerId: githubUserData.id } })

    if (user == null) {
      const email = `github.${githubUserData.id}@study.together`
      const randomPassword = Math.random().toString(36).slice(-8)

      user = await User.create({
        email,
        password: randomPassword,
        providerId: githubUserData.id,
        provider: 'github'
      })
    }
    res.cookie('token', 'token', {
      maxAge: 9000,
      httpOnly: true
    })
    res.redirect('/')
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' })
  }
}
