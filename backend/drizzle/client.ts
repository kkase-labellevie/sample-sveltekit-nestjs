import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  user: 'user',
  password: 'password',
  database: 'mydb',
  ssl: false,
});

export const db = drizzle(pool);
