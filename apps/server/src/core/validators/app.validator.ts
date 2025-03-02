import * as Joi from 'joi';
import { AppEnvironment } from '../enums/app-environment.enum';

export const appValidationSchema = Joi.object({
  NODE_ENV: Joi.string()
    .valid(
      AppEnvironment.DEV,
      AppEnvironment.TEST,
      AppEnvironment.STAGING,
      AppEnvironment.PRODUCTION,
    )
    .default(AppEnvironment.DEV),
  PORT: Joi.number().positive().integer().default(3000),
  POKE_API_URL: Joi.string().required(),
  DEFAULT_LIMIT: Joi.number().positive().integer().default(10),
});
