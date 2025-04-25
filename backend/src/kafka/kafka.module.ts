import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { KafkaService } from './kafka.service';
import { Partitioners } from 'kafkajs';
import { KafkaConfig } from '@nestjs/microservices/external/kafka.interface';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'KAFKA_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            brokers: ['localhost:9092'],
            ssl: false,
            sasl: undefined,
            createPartitioner: Partitioners.LegacyPartitioner,
          } as KafkaConfig & { createPartitioner: any },
          consumer: {
            groupId: 'test-group-server',
            sessionTimeout: 10000,
            heartbeatInterval: 3000,
          },
        },
      },
    ]),
  ],
  providers: [KafkaService],
  exports: [KafkaService],
})
export class KafkaModule {}
