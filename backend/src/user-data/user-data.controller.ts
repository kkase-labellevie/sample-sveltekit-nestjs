import { Controller, Get, Post, Body } from '@nestjs/common';
import { KafkaService } from '../kafka/kafka.service'; // Kafkaサービスをインポート
import { UserDataService } from './user-data.service';

@Controller('user-data')
export class UserDataController {
  constructor(
    private readonly kafkaService: KafkaService,
    private readonly userDataService: UserDataService,
  ) {}

  @Post()
  async insertUser(@Body() body: { name: string; job: string; bio: string }) {
    await this.userDataService.insertUser(body);
    return { status: 'User inserted!' };
  }

  @Get()
  async getUserData() {
    // Kafkaにメッセージ送信！
    await this.kafkaService.sendMessage('ユーザーデータリクエストが来た！');

    const user = await this.userDataService.getUser();
    return user;
  }
}
