import config from '../config/config'
const env: 'local' | 'production' | 'development' | string = process.env.NODE_ENV ?? 'local'

export const ApplicationConfig = config[env as 'local' | 'production' | 'development']
