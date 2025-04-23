import { Module } from '@nestjs/common';
import { UserDataController } from './user-data.controller';
import { KafkaModule } from '../kafka/kafka.module';

@Module({
  controllers: [UserDataController],
  imports: [KafkaModule],
})
export class UserDataModule {}
