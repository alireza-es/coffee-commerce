import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductController } from './controllers';
import { ProductEntity } from './entities';
import { ProductSeed } from './seeds';
import { ProductService } from './services';

@Module({
  imports: [TypeOrmModule.forFeature([ProductEntity])],
  controllers: [ProductController],
  providers: [ProductService, ProductSeed]
})
export class ProductCatalogModule {

}
