module.exports = {
  development: {
    username: process.env.DB_USER ?? 'DB_USER',
    password: process.env.DB_PASSWORD ?? 'DB_PASSWORD',
    database: 'project_development',
    host: process.env.DB_HOST ?? 'DB_HOST',
    dialect: 'mysql',
    APPLICATION_PORT: 8080
  },
  local: {
    username: 'root',
    password: null,
    database: 'project_local',
    host: '127.0.0.1',
    dialect: 'mysql',
    APPLICATION_PORT: 8080
  },
  production: {
    username: process.env.DB_USER ?? 'DB_USER',
    password: process.env.DB_PASSWORD ?? 'DB_PASSWORD',
    database: 'project_production',
    host: process.env.DB_HOST ?? 'DB_HOST',
    dialect: 'mysql',
    APPLICATION_PORT: 8080
  }
}
