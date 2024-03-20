'use strict'
import { Model, DataTypes } from 'sequelize'
import { sequelize } from '.'
import { REGEX_EMAIL, SALT_ROUNDS } from '../utils/constants'
const bcrypt = require('bcrypt')

interface UserAttributes {
  id?: number
  email: string
  password: string
  phone?: string
  name?: string
  avatar?: string
  providerId?: string | null
  provider?: string | null
}

interface UserCreationAttributes extends UserAttributes { }

class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  public email!: string
  public password!: string
  public phone!: string
  public name!: string
  public avatar!: string
  public providerId!: string | null
  public provider!: string | null
  public id!: number

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
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isInValidEmail (value: string) {
          if (!REGEX_EMAIL.test(value)) {
            throw new Error('Định dạng email không hợp lệ!')
          }
        },
        async isUniqueEmail (value: string) {
          const user = await User.findOne({ where: { email: value } })

          if (user !== null) {
            throw new Error('Địa chỉ email đã tồn tại!')
          }
        },
        isTooLong (value: string) {
          if (value.length > 255) {
            throw new Error('Địa chỉ email không được quá 255 ký tự!')
          }
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isTooShort (value: string) {
          if (value.length < 8) {
            throw new Error('Mật khẩu phải có ít nhất 8 ký tự!')
          }
        }
      }
    },
    phone: DataTypes.STRING,
    name: DataTypes.STRING,
    avatar: DataTypes.STRING,
    providerId: DataTypes.STRING,
    provider: DataTypes.STRING
  },
  {
    sequelize,
    modelName: 'User',
    tableName: 'Users',
    timestamps: true,
    indexes: [
      {
        unique: true,
        fields: ['email']
      },
      {
        unique: true,
        fields: ['providerId']
      }
    ],
    hooks: {
      beforeSave: async (user: User) => {
        if (user.changed('password')) {
          const hashedPassword = await bcrypt.hash(user.password, SALT_ROUNDS)

          user.password = hashedPassword
        }
      }
    }
  }
)

export default User
