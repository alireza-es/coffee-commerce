import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductController, VariationController } from './controllers';
import { ProductEntity } from './entities';
import { ProductSeed } from './seeds';
import { ProductService, VariationService } from './services';

@Module({
  imports: [TypeOrmModule.forFeature([ProductEntity])],
  controllers: [ProductController, VariationController],
  providers: [ProductService, VariationService, ProductSeed]
})
export class ProductCatalogModule {

}
