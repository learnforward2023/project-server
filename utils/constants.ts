// RFC 5322 Official Standard
// see: https://datatracker.ietf.org/doc/html/rfc2822#section-3.4.1 for more details
export const REGEX_EMAIL = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
export const SALT_ROUNDS = 12

const GITHUB_CLIENT_ID_LOCAL = 'd3c3bd8c6bcc882f315c'
const GITHUB_CLIENT_SECRET_LOCAL = 'aac335b918bb8bfa0e86d34c7e94dfadcd32a535'
const SECRET_JWT_KEY_LOCAL = 'study_together_secret_key'

export const GITHUB_CLIENT_ID = process.env.NODE_ENV === 'local' ? GITHUB_CLIENT_ID_LOCAL : process.env.GITHUB_CLIENT_ID
export const GITHUB_CLIENT_SECRET = process.env.NODE_ENV === 'local' ? GITHUB_CLIENT_SECRET_LOCAL : process.env.GITHUB_CLIENT_SECRET
export const SECRET_JWT_KEY = process.env.NODE_ENV === 'local' ? SECRET_JWT_KEY_LOCAL : process.env.SECRET_JWT_KEY

const GOOGLE_CLIENT_ID_LOCAL = '210177323003-678d3l33qsv9erdv5d3sdikqbtmrhv8b.apps.googleusercontent.com'
const GOOGLE_CLIENT_SECRET_LOCAL = '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'
const GOOGLE_REDIRECT_URI_LOCAL = 'http://localhost:8080/api/v1/auth/google/callback'

export const GOOGLE_REDIRECT_URI = process.env.NODE_ENV === 'local' ? GOOGLE_REDIRECT_URI_LOCAL : process.env.GOOGLE_REDIRECT_URI
export const GOOGLE_CLIENT_ID = process.env.NODE_ENV === 'local' ? GOOGLE_CLIENT_ID_LOCAL : process.env.GOOGLE_CLIENT_ID
export const GOOGLE_CLIENT_SECRET = process.env.NODE_ENV === 'local' ? GOOGLE_CLIENT_SECRET_LOCAL : process.env.GOOGLE_CLIENT_SECRET
