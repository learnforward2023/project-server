module.exports = {
  development: {
    username: process.env.DB_USER ?? 'DB_USER',
    password: process.env.DB_PASSWORD ?? 'DB_PASSWORD',
    database: 'project_development',
    host: process.env.DB_HOST ?? 'DB_HOST',
    dialect: 'mysql',
    authRedirectSuccessUrl: 'http://dev.studytogether.vn/auth/success'
  },
  local: {
    username: 'username',
    password: 'password',
    database: 'project_local',
    host: '127.0.0.1',
    dialect: 'mysql',
    authRedirectSuccessUrl: 'http://localhost:3000/auth/success'
  },
  production: {
    username: process.env.DB_USER ?? 'DB_USER',
    password: process.env.DB_PASSWORD ?? 'DB_PASSWORD',
    database: 'project_production',
    host: process.env.DB_HOST ?? 'DB_HOST',
    dialect: 'mysql',
    authRedirectSuccessUrl: 'https://merry.studytogether.vn/auth/success'
  }
}
