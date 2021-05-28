import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  homeMessage(): string {
    return 'Service is started and running!';
  }
}
