import { Injectable } from '@nestjs/common';
import { db } from '../../drizzle/client';
import { users } from '../../drizzle/schema';

@Injectable()
export class UserDataService {
  async insertUser() {
    await db.insert(users).values({
      name: '佐々木 太郎',
      job: 'バックエンドエンジニア',
      bio: 'NestJSが得意なエンジニアです!',
    });
  }

  async getUser() {
    const result = await db.select().from(users);
    return result[2];
  }
}
