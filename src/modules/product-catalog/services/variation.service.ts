import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductEntity } from '../entities';
import { Variation } from '../models';

@Injectable()
export class VariationService {
  constructor(
    @InjectRepository(ProductEntity) private readonly productRepo: Repository<ProductEntity>,
  ) { }
  async loadVariations(productName: string, options: {
    [k: string]:
    | boolean
    | string
    | number;
  }): Promise<Variation[]> {
    const product = await this.productRepo.findOne({ name: productName });
    if (!product)
      throw new Error('Product not found.');

    let variations = product.variations;
    if (options) {
      for (const [key, value] of Object.entries(options)) {
        variations = variations.filter(x => x.productOptions[key] && x.productOptions[key] == value);
      }
    }

    return variations;
  }
}
