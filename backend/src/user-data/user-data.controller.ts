import { Controller, Get } from '@nestjs/common';
import { KafkaService } from '../kafka/kafka.service'; // Kafkaサービスをインポート
import { UserDataService } from './user-data.service';

@Controller('user-data')
export class UserDataController {
  constructor(
    private readonly kafkaService: KafkaService,
    private readonly userDataService: UserDataService,
  ) {}

  @Get('insert')
  async insertUser() {
    await this.userDataService.insertUser();
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
