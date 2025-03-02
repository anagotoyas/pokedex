import { registerAs } from '@nestjs/config';
import { IAppConfig } from './interfaces/app-config.interface';
import { AppEnvironment } from './enums/app-environment.enum';

export default registerAs(
  'app',
  (): IAppConfig => ({
    env: process.env.NODE_ENV || AppEnvironment.DEV,
    port: process.env.PORT ? +process.env.PORT : 3000,
    pokeUrl: process.env.POKE_API_URL,
    defaultLimit: process.env.DEFAULT_LIMIT ? +process.env.DEFAULT_LIMIT : 10,
  }),
);
