import { Controller, Get } from '@nestjs/common';
import { KafkaService } from './kafka/kafka.service';

@Controller()
export class AppController {
  constructor(private readonly kafkaService: KafkaService) {}

  @Get('send')
  sendKafkaMessage() {
    return this.kafkaService.sendMessage('Hello from Kafka!');
  }

  getHello() {
    return 'Hello World!';
  }
}
