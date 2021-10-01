import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { json } from 'express'
import { AppModule } from './app.module'

async function initApp() {
  const app = await NestFactory.create(AppModule)
  app.useGlobalPipes(new ValidationPipe())
  app.use(json({ limit: process.env['REQUEST_BODY_LIMIT'] || '5Mb' }))
  app.enableCors()

  await app.listen(process.env.PORT || 4040)
}

initApp()
