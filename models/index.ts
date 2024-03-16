import * as fs from 'fs';
import * as path from 'path';
import { Sequelize, DataTypes } from 'sequelize';
import process from 'process';

const basename: string = path.basename(__filename);
const env: string = process.env.NODE_ENV ?? 'local';
const config = require(__dirname + '/../config/config.js');
const databaseConfig = config[env];
const db: any = {};

const sequelize: Sequelize = new Sequelize(databaseConfig.database, databaseConfig.username, databaseConfig.password, { ...databaseConfig, dialect: 'mysql' })

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
