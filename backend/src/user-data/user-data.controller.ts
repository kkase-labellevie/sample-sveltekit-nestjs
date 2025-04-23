import { Controller, Get } from '@nestjs/common';
import { KafkaService } from '../kafka/kafka.service'; // Kafkaサービスをインポート

@Controller('user-data')
export class UserDataController {
  constructor(private readonly kafkaService: KafkaService) {}

  @Get()
  async getUserData() {
    // Kafkaにメッセージ送信！
    await this.kafkaService.sendMessage('ユーザーデータリクエストが来た！');

    // HTTPレスポンスとしてデータを返す
    return {
      name: '山田 太郎',
      job: 'フロントエンドエンジニア',
      bio: 'ReactとSvelteKitが得意なエンジニアです!',
    };
  }
}
