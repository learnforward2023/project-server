import { type Router } from 'express'
import registerNewAccount from './registerNewAccount'
import loginWithGithub from './loginWithGithub'

export default (router: Router) => {
  router.post('/api/users/register', registerNewAccount)
  router.get('/auth/github/callback', loginWithGithub)
}
