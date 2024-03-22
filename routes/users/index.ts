import { type Router } from 'express'
import registerNewAccount from './registerNewAccount'
import loginWithGithub from './loginWithGithub'
import loginWithGoogle from './loginWithGoogle'
import loginWithFacebook from './loginWithFacebook'

export default (router: Router) => {
  router.post('/api/v1/users/register', registerNewAccount)
  router.get('/api/v1/auth/github/callback', loginWithGithub)
  router.get('/api/v1/auth/google/callback', loginWithGoogle)
  router.get('/api/v1/auth/facebook/callback', loginWithFacebook)
}
