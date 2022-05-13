import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

// req, res 에 대해 알아야 함.
@Controller() // 공통 주소
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    return this.appService.getHello();
  }

  @Get('user') // @Controller('abc') 면 GET /abc. 세부 주소
  getUser(): string {
    return this.appService.getUser();
  }

  @Post('user')
  postHello(): string {
    return this.appService.postUser();
  }
} 
