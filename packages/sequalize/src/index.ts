import { Sequelize } from 'sequelize';
import { DatabaseClient, User, OmitBaseModelFields } from '@packages/lib';
import { UserModel } from './user.model';
const sequelize = new Sequelize(process.env.DATABASE_URL || 'sqlite::memory:', {
  logging: false, // Disable logging for simplicity
});


// Sync database models
sequelize.sync();

export const sequelizeDatabaseClient: DatabaseClient = {
  async findUsers(): Promise<User[]> {
    return UserModel.findAll();
  },
  async findUserById(id: string): Promise<User | null> {
    return UserModel.findByPk(id);
  },
  async createUser(user: OmitBaseModelFields<User>): Promise<User> {
    return UserModel.create(user);
  },
};
