module.exports = {
  development: {
    username: process.env.DB_USER ?? 'DB_USER',
    password: process.env.DB_PASSWORD ?? 'DB_PASSWORD',
    database: 'project_development',
    host: process.env.DB_HOST ?? 'DB_HOST',
    dialect: 'mysql',
    authRedirectSuccessUrl: 'https://merry.studytogether.vn/auth/success'
  },
  local: {
    username: 'username',
    password: 'password',
    database: 'project_local',
    host: 'localhost',
    dialect: 'mysql',
    authRedirectSuccessUrl: 'http://localhost:3000/auth/success'
  },
  production: {
    username: process.env.DB_USER ?? 'DB_USER',
    password: process.env.DB_PASSWORD ?? 'DB_PASSWORD',
    database: 'project_production',
    host: process.env.DB_HOST ?? 'DB_HOST',
    dialect: 'mysql',
    authRedirectSuccessUrl: 'https://studytogether.vn/auth/success'
  }
}
