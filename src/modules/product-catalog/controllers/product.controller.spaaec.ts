import { CacheModule } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommandModule } from 'nestjs-command';
import { ProductController } from '.';
import { CacheService, TypeOrmService } from '../../../config';
import { ProductCatalogModule } from '../product-catalog.module';

describe('ProductController', () => {
  let controller: ProductController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRootAsync({
          useClass: TypeOrmService
        }),
        CacheModule.registerAsync({
          useClass: CacheService
        }),
        ProductCatalogModule,
        CommandModule
      ]
    }).compile();

    controller = module.get<ProductController>(ProductController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
