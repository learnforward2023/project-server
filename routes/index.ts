import { type Router, type Response, type Request } from 'express'
import users from './users'

export default (router: Router) => {
  router.get('/', (_: Request, res: Response) => {
    res.send('Express + TypeScript Server')
  })

  users(router)
}
