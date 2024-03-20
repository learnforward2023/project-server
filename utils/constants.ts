// RFC 5322 Official Standard
// see: https://datatracker.ietf.org/doc/html/rfc2822#section-3.4.1 for more details
export const REGEX_EMAIL = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
export const SALT_ROUNDS = 12

const GITHUB_CLIENT_ID_LOCAL = 'd3c3bd8c6bcc882f315c'
const GITHUB_CLIENT_SECRET_LOCAL = 'aac335b918bb8bfa0e86d34c7e94dfadcd32a535'

export const GITHUB_CLIENT_ID = process.env.NODE_ENV === 'local' ? GITHUB_CLIENT_ID_LOCAL : process.env.GITHUB_CLIENT_ID
export const GITHUB_CLIENT_SECRET = process.env.NODE_ENV === 'local' ? GITHUB_CLIENT_SECRET_LOCAL : process.env.GITHUB_CLIENT_SECRET
