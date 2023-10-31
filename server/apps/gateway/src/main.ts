import { NestFactory } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';
import { GatewayModule } from './gateway.module';

async function bootstrap() {
    const app = await NestFactory.create(GatewayModule, {
        cors: {
            origin: ['http://towerdefense.test'],
            credentials: true,
        },
    });
    app.use(cookieParser());
    await app.listen(3000);
}
bootstrap();
