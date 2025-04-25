import { Injectable } from '@nestjs/common';
import { db } from '../../drizzle/client';
import { users } from '../../drizzle/schema';

@Injectable()
export class UserDataService {
  async insertUser(body: { name: string; job: string; bio: string }) {
    await db.insert(users).values({
      name: body.name,
      job: body.job,
      bio: body.bio,
    });
  }

  async getUser() {
    return await db.select().from(users);
  }
}
