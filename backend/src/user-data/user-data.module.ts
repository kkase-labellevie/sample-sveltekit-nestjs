import { Module } from '@nestjs/common';
import { UserDataController } from './user-data.controller';
import { UserDataService } from './user-data.service';
import { KafkaModule } from '../kafka/kafka.module';

@Module({
  controllers: [UserDataController],
  providers: [UserDataService],
  imports: [KafkaModule],
})
export class UserDataModule {}
