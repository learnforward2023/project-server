const config = {
  development: {
    username: process.env.DB_USER ?? 'DB_USER',
    password: process.env.DB_PASSWORD ?? 'DB_PASSWORD',
    database: 'project_development',
    host: process.env.DB_HOST ?? 'DB_HOST',
    dialect: 'mysql'
  },
  local: {
    username: 'root',
    password: '',
    database: 'project_local',
    host: '127.0.0.1',
    dialect: 'mysql'
  },
  production: {
    username: process.env.DB_USER ?? 'DB_USER',
    password: process.env.DB_PASSWORD ?? 'DB_PASSWORD',
    database: 'project_production',
    host: process.env.DB_HOST ?? 'DB_HOST',
    dialect: 'mysql'
  }
}

export default config
