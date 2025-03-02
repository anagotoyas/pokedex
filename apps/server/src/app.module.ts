import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import appConfig from './core/app.config';
import { ConfigModule } from '@nestjs/config';
import { appValidationSchema } from './core/validators/app.validator';
import { PokemonModule } from './pokemon/pokemon.module';

@Module({
  imports: [
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
  providers: [AppService],
})
export class AppModule {}
