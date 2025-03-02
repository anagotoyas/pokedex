import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import appConfig from './core/app.config';
import { ConfigModule } from '@nestjs/config';
import { appValidationSchema } from './core/validators/app.validator';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [appConfig],
      cache: true,
      isGlobal: true,
      expandVariables: true,
      validationSchema: appValidationSchema,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
