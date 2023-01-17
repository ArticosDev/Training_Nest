import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './common/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // app.useGlobalFilters(new HttpExceptionFilter());

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, //Convert from string DTO to primitive values
      whitelist: true, //Filter data based on DTOs
      //forbidNonWhitelisted: true, //Trow an error, if receive extra data on DTOs validation
    }),
  );

  await app.listen(3000);
}
bootstrap();
