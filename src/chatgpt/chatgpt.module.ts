import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { ChatGPTController } from './chatgpt.controller';
import { ChatGPTService } from './chatgpt.service';

@Module({
  imports: [HttpModule, ConfigModule.forRoot()],
  controllers: [ChatGPTController],
  providers: [ChatGPTService],
})
export class ChatgptModule {}
