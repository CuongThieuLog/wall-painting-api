import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class ChatGPTService {
  private readonly openaiApiKey: string;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    this.openaiApiKey = this.configService.get<string>('OPENAI_API_KEY');
  }

  async getChatGPTResponse(prompt: string): Promise<any> {
    const url = 'https://api.openai.com/v1/images/generations';

    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.openaiApiKey}`,
    };

    const data = {
      model: 'dall-e-3',
      prompt: prompt,
      n: 1,
      size: '1024x1024',
    };

    const response = await lastValueFrom(
      this.httpService.post(url, data, { headers }),
    );

    return response.data;
  }
}
