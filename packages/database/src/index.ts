import 'dotenv/config';
import { DatabaseClient } from '@packages/lib';
import { sequelizeDatabaseClient } from '@packages/sequalize';
import { mockDatabaseClient } from './mockDb';

let client: DatabaseClient;

if (process.env.DB_CLIENT === 'mock') {
  client = mockDatabaseClient;
} else if (process.env.DB_CLIENT === 'sequelize') {
  client = sequelizeDatabaseClient;
} else {
  throw new Error('Invalid DB_CLIENT');
}

export default client;