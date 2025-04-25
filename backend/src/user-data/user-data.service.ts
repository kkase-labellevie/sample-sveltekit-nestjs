import { Injectable } from '@nestjs/common';
import { db } from '../../drizzle/client';
import { users } from '../../drizzle/schema';

@Injectable()
export class UserDataService {
  async insertUser() {
    await db.insert(users).values({
      name: 'あざらし 太輔',
      job: 'あざらしエンジニアあああ',
      bio: 'あざらしが得意なエンジニアです!',
    });
  }

  async getUser() {
    return await db.select().from(users);
  }
}
