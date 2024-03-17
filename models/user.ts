'use strict'
import { Model, DataTypes } from 'sequelize'
import db from './index'
const { sequelize } = db

interface UserAttributes {
  email: string
  password: string
  phone?: string
  name?: string
  avatar?: string
}

interface UserCreationAttributes extends UserAttributes {}

class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  public email!: string
  public password!: string
  public phone!: string
  public name!: string
  public avatar!: string

  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  // public static associate (models: any): void {
  //   // define association here
  // }
}

User.init(
  {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.STRING,
    name: DataTypes.STRING,
    avatar: DataTypes.STRING
  },
  {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    timestamps: true,
    indexes: [
      {
        unique: true,
        fields: ['email']
      }
    ]
  }
)

export default User
