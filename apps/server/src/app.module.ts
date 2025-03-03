import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import appConfig from './core/app.config';
import { ConfigModule } from '@nestjs/config';
import { appValidationSchema } from './core/validators/app.validator';
import { PokemonModule } from './pokemon/pokemon.module';
import { CacheModule } from '@nestjs/cache-manager';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from './core/exception-filters/http-exception.filter';

@Module({
  imports: [
    CacheModule.register({ isGlobal: true }),
    ConfigModule.forRoot({
      load: [appConfig],
      cache: true,
      isGlobal: true,
      expandVariables: true,
      validationSchema: appValidationSchema,
    }),
    PokemonModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule {}
