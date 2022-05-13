import { Injectable } from '@nestjs/common';

// 요청, 응답에 대해선 모름
@Injectable()
export class AppService {

  async getHello() { 
    return process.env.SECRET;
  }

  getUser(): string { // req, res 없는게 좋다
    return 'Hello World!';
  }

  postUser(): string {
    return 'post succeeded';
  }
}
 