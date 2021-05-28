import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductEntity } from '../entities';
import { Product } from '../models';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity) private readonly productRepo: Repository<ProductEntity>,
  ) { }

  async getAll(): Promise<ProductEntity[]> {
    return this.productRepo.find();
  }

  async getOne(id: string): Promise<ProductEntity> {
    return this.productRepo.findOneOrFail({ _id: id });
  }
  async getOneByName(name: string): Promise<ProductEntity> {
    return this.productRepo.findOne({ name: name });
  }
  async insertOne(product: Product): Promise<ProductEntity> {
    const entity = new ProductEntity(product);
    const newProduct = this.productRepo.create(entity);
    await this.productRepo.save(newProduct);
    return newProduct;
  }

  async updateOne(product: Product): Promise<ProductEntity> {
    const { _id: id } = product;
    await this.productRepo.update({ _id: id }, product);
    return this.getOne(id);
  }

  async deleteOne(id: string): Promise<{ deleted: boolean; message?: string }> {
    try {
      await this.productRepo.delete({ _id: id });
      return { deleted: true };
    } catch (err) {
      return { deleted: false, message: err.message };
    }
  }
}
