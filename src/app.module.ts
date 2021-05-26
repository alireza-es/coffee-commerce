import { CacheModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CacheService, TypeOrmService } from './config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmService
    }),
    CacheModule.registerAsync({
      useClass: CacheService
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
