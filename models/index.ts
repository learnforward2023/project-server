import * as fs from 'fs';
import * as path from 'path';
import { Sequelize } from 'sequelize';
import { ApplicationConfig } from '../utils/config';

const basename: string = path.basename(__filename);
const db: any = {};

const sequelize: Sequelize = new Sequelize(ApplicationConfig.database, ApplicationConfig.username, ApplicationConfig.password, { ...ApplicationConfig, dialect: 'mysql' })

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
    const model = require(path.join(__dirname, file));;
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export { sequelize }

export default db;
