import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { KafkaConsumerController } from './kafka/kafka.consumer';
import { KafkaService } from './kafka/kafka.service';
import { UserDataModule } from './user-data/user-data.module';
import { KafkaModule } from './kafka/kafka.module';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'KAFKA_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            brokers: ['localhost:9092'],
          },
        },
      },
    ]),
    UserDataModule,
    KafkaModule,
  ],
  controllers: [AppController, KafkaConsumerController],
  providers: [AppService, KafkaService],
})
export class AppModule {}
