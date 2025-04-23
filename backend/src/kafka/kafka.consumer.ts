import { Controller } from '@nestjs/common';
import {
  MessagePattern,
  Payload,
  Ctx,
  KafkaContext,
} from '@nestjs/microservices';

@Controller()
export class KafkaConsumerController {
  @MessagePattern('test-topic')
  handleMessage(@Payload() payload: any, @Ctx() context: KafkaContext) {
    const message = context.getMessage();
    console.log('Received message:', message.value);
  }
}
