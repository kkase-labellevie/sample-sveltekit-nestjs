import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { KafkaService } from '../kafka/kafka.service';
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

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    await this.userDataService.deleteUser(Number(id));
    return { status: 'User deleted!' };
  }
}
