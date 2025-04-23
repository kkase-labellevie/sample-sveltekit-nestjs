import { Injectable, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { Inject } from '@nestjs/common';

@Injectable()
export class KafkaService implements OnModuleInit {
  constructor(
    @Inject('KAFKA_SERVICE') private readonly kafkaClient: ClientKafka,
  ) {}

  async onModuleInit() {
    await this.kafkaClient.connect();
  }

  async sendMessage(message: string) {
    console.log('Sending message to Kafka...');
    this.kafkaClient.emit('test-topic', { message }).subscribe({
      next: () => console.log('Kafka emit success'),
      error: (err) => console.error('Kafka emit error:', err),
    });
    return { status: 'Message emitted!' };
  }
}
