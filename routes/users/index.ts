import { type Router } from 'express'
import registerNewAccount from './registerNewAccount'
import loginWithGithub from './loginWithGithub'
import loginWithGoogle from './loginWithGoogle'
import { GOOGLE_CLIENT_ID, GOOGLE_REDIRECT_URI } from '../../utils/constants'

export default (router: Router) => {
  router.post('/api/v1/users/register', registerNewAccount)
  router.get('/api/v1/auth/github/callback', loginWithGithub)
  router.get('/login', (req, res) => {
    const url = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${GOOGLE_REDIRECT_URI}&scope=profile email&access_type=offline`

    res.redirect(url)
  })
  router.get('/api/v1/auth/google/callback', loginWithGoogle)
}
