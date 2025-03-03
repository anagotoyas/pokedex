import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  Logger,
} from '@nestjs/common';
import { Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(HttpExceptionFilter.name);

  catch(exception: HttpException, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();
    const message = exception.getResponse();

    this.logger.error(
      `HTTP Exception: ${status} - ${JSON.stringify(message)}`,
      exception.stack,
    );

    response.status(status).json({
      statusCode: status ?? 500,
      message: typeof message === 'string' ? message : message['message'],
      timestamp: new Date().toISOString(),
    });
  }
}
