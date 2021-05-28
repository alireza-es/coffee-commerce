import { CacheModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommandModule } from 'nestjs-command';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CacheService, TypeOrmService } from './config';
import { ProductCatalogModule } from './modules/product-catalog/product-catalog.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmService
    }),
    CacheModule.registerAsync({
      useClass: CacheService
    }),
    ProductCatalogModule,
    CommandModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
