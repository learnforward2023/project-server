import { type Router } from 'express'
import registerNewAccount from './registerNewAccount'

export default (router: Router) => {
  router.post('/api/users/register', registerNewAccount)
}
