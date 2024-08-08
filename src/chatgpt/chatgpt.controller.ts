import { Controller, Post, Body } from '@nestjs/common';
import { ChatGPTService } from './chatgpt.service';

@Controller('chatgpt')
export class ChatGPTController {
  constructor(private readonly chatGPTService: ChatGPTService) {}

  @Post('generate')
  async generate(@Body('prompt') prompt: string) {
    return this.chatGPTService.getChatGPTResponse(prompt);
  }
}
