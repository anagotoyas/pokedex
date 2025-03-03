import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, OpenAPIObject, SwaggerModule } from '@nestjs/swagger';

export function init(app: INestApplication): void {
  const options = new DocumentBuilder()
    .setTitle('POKE API')
    .setDescription('The POKE API')
    .setVersion('1.0')
    .addTag('POKE')
    .build();

  const documentFactory = (): OpenAPIObject =>
    SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, documentFactory);
}
