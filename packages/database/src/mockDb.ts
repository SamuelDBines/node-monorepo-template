import { DatabaseClient, User, OmitBaseModelFields } from '@packages/lib';

export const mockDatabaseClient: DatabaseClient = {
  findUsers: function (): Promise<User[]> {
    return Promise.resolve([
      {
        id: '1',
        email: 'john@example.com',
        password: 'password',
        name: 'John Doe',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },
  findUserById: function (id: string): Promise<User | null> {
    throw new Error('Function not implemented.');
  },
  createUser: function (user: OmitBaseModelFields<User>): Promise<User> {
    throw new Error('Function not implemented.');
  }
};