import { type Router } from 'express'
import registerNewAccount from './registerNewAccount'
import loginWithGithub from './loginWithGithub'

export default (router: Router) => {
  router.post('/api/v1/users/register', registerNewAccount)
  router.get('/api/v1/auth/github/callback', loginWithGithub)
}
