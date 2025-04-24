import { pgTable, serial, varchar, text } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 100 }).notNull(),
  job: varchar('job', { length: 100 }).notNull(),
  bio: text('bio'),
});
