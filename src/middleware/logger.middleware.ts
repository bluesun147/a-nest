import { Injectable, Logger, NestMiddleware } from "@nestjs/common";
import { NextFunction } from "express";

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    private logger = new Logger('http');

    use(request: Request, response: Response, next: NextFunction): void {
        
    }
}