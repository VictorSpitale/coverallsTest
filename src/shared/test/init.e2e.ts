import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../../app.module';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { AuthGuardMock } from './mocks/auth.guard.mock';
import { ValidationPipe } from '@nestjs/common';
import { DatabaseService } from '../../database/database.service';
import { ConfigService } from '@nestjs/config';
import { getRequest } from './superagent';
import * as request from 'supertest';
import { RolesGuard } from '../../auth/guards/roles.guard';

export async function init_e2e() {
  const moduleFixture: TestingModule = await Test.createTestingModule({
    imports: [AppModule],
  })
    .overrideProvider(RolesGuard)
    .useClass(AuthGuardMock)
    .overrideProvider(JwtAuthGuard)
    .useClass(AuthGuardMock)
    .compile();

  return {
    ...(await getInitConst(moduleFixture)),
  };
}

async function getInitConst(moduleFixture: TestingModule) {
  const app = moduleFixture.createNestApplication();
  app.useGlobalPipes(new ValidationPipe());
  await app.init();
  const dbConnection = moduleFixture
    .get<DatabaseService>(DatabaseService)
    .getDbHandle();
  const httpServer = app.getHttpServer();
  const config = moduleFixture.get<ConfigService>(ConfigService);
  const apiKeyHeader = { 'x-api-key': config.get('api_key.key') };
  const httpRequest = getRequest(request(httpServer), apiKeyHeader);
  return {
    app,
    dbConnection,
    httpRequest,
  };
}

export async function initE2eWithGuards() {
  const moduleFixture: TestingModule = await Test.createTestingModule({
    imports: [AppModule],
  }).compile();

  return {
    ...(await getInitConst(moduleFixture)),
  };
}