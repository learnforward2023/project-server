import { type Request, type Response } from 'express'
import axios from 'axios'

const clientId = 'd3c3bd8c6bcc882f315c'
const clientSecret = 'aac335b918bb8bfa0e86d34c7e94dfadcd32a535'

export default async (req: Request, res: Response) => {
  try {
    const code = req.query.code

    const body = {
      clientId,
      clientSecret,
      code
    }

    const opts = { headers: { accept: 'application/json' } }
    const response = await axios.post(
      'https://github.com/login/oauth/access_token',
      body,
      opts
    )
    // eslint-disable-next-line
		console.log(response.data);
    const accessToken = response.data.access_token

    res.redirect(`/?access_token=${accessToken}`)
    // Lấy thông tin người dùng từ GitHub
    const githubUserResponse = await axios.get('https://api.github.com/user', {
      headers: {
        Authorization: `token ${accessToken}`
      }
    })

    const githubUserData = githubUserResponse.data
    // eslint-disable-next-line
		console.log(githubUserData);
    // console.log(githubUserData.email);
    // let user = await User.findOne({ where: { githubId: githubUserData.id } });
    // res.status(200).json({ message: "Đăng nhập thành công" ,user});
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' })
  }
}
