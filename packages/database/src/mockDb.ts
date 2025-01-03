import { DatabaseClient, User, OmitBaseModelFields } from '@packages/lib';

export const mockDatabaseClient: DatabaseClient = {
  findUsers: function (): Promise<User[]> {
    throw new Error('Function not implemented.');
  },
  findUserById: function (id: string): Promise<User | null> {
    throw new Error('Function not implemented.');
  },
  createUser: function (user: OmitBaseModelFields<User>): Promise<User> {
    throw new Error('Function not implemented.');
  }
};