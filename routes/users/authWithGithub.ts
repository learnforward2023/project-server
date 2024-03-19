import { type Request, type Response } from 'express'

const clientId = 'd3c3bd8c6bcc882f315c'

export default (req: Request, res: Response) => {
  res.redirect(
    `https://github.com/login/oauth/authorize?clientId=${clientId}`
  )
}
