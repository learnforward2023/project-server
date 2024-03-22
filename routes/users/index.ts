import { type Router } from 'express'
import registerNewAccount from './registerNewAccount'
import loginWithGithub from './loginWithGithub'
import loginWithGoogle from './loginWithGoogle'
<<<<<<< HEAD
import { GOOGLE_CLIENT_ID, GOOGLE_REDIRECT_URI } from '../../utils/constants'
=======
import loginWithFacebook from './loginWithFacebook'
import {
  FACEBOOK_CLIENT_ID,
  FACEBOOK_REDIRECT_URI,
  GOOGLE_CLIENT_ID,
  GOOGLE_REDIRECT_URI
} from '../../utils/constants'
>>>>>>> 5980179 (feat: login with facebook)

export default (router: Router) => {
  router.post('/api/v1/users/register', registerNewAccount)
  router.get('/api/v1/auth/github/callback', loginWithGithub)
  router.get('/login', (req, res) => {
    const url = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${GOOGLE_REDIRECT_URI}&scope=profile email&access_type=offline`

    res.redirect(url)
  })
  router.get('/api/v1/auth/google/callback', loginWithGoogle)
<<<<<<< HEAD
=======
  router.get('/auth/facebook', (req, res) => {
    res.redirect(
      `https://www.facebook.com/v12.0/dialog/oauth?client_id=${FACEBOOK_CLIENT_ID}&redirect_uri=${FACEBOOK_REDIRECT_URI}&scope=email`
    )
  })
  router.get('/api/v1/auth/facebook/callback', loginWithFacebook)
>>>>>>> 5980179 (feat: login with facebook)
}
