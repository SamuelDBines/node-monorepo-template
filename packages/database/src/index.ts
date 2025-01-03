import 'dotenv/config';
import { DatabaseClient } from '@packages/lib';
import { S }
import { mockDatabaseClient } from './mockDb';

let client: DatabaseClient;

if (process.env.DB_CLIENT === 'mock') {
  client = mockDatabaseClient;
} else {
  throw new Error('Invalid DB_CLIENT');
}

export default client;