import { Sequelize, Model, Optional, DataTypes, NOW } from 'sequelize';
import { DatabaseClient, User } from '@packages/lib';

const sequelize = new Sequelize(process.env.DATABASE_URL || 'sqlite::memory:', {
  logging: false, // Disable logging for simplicity
});

// Define the User model
export class UserModel extends Model<User, Optional<User, 'id' | 'createdAt' | 'updatedAt'>> {
  public id!: string;
  public email!: string;
  public password!: string;
  public name!: string;
  public createdAt!: Date;
  public updatedAt!: Date;
}

// Initialize the User model schema
UserModel.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: NOW,
    },
  },
  {
    sequelize,
    tableName: 'users',
  }
);