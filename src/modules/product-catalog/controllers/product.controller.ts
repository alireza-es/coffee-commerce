import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ProductDTO } from '../dto';
import { ProductEntity } from '../entities';
import { ProductService } from '../services';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) { }
  @Get()
  async getProducts(): Promise<ProductEntity[]> {
    return this.productService.getAll();
  }

  @Get('/:id')
  async getById(@Param('id') id: string): Promise<ProductEntity> {
    return this.productService.getOne(id);
  }

  @Post()
  async newProduct(@Body() product: ProductDTO): Promise<ProductEntity> {
    return this.productService.insertOne(product);
  }

  @Patch()
  async updateProduct(@Body() product: ProductDTO): Promise<ProductEntity> {
    return this.productService.updateOne(product);
  }

  @Delete('/:id')
  async deleteProduct(@Param('id') id: string): Promise<{ deleted: boolean }> {
    return this.productService.deleteOne(id);
  }

}
