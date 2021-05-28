import { Injectable } from "@nestjs/common";
import { Command } from 'nestjs-command';
import { Product } from '../models';
import { ProductService } from "../services";
import { products as products_to_seed } from './products.data';
@Injectable()
export class ProductSeed {
  constructor(private productService: ProductService) {

  }
  @Command({ command: 'create:product', describe: 'Create the products', autoExit: true })
  async create() {
    const products = await this.seedProducts(products_to_seed);
    console.log(products);
  }
  private async seedProducts(products_to_seed: Product[]): Promise<Product[]> {
    let products: Product[] = [];
    for (let product_to_seed of products_to_seed) {
      const existProduct = await this.productService.getOneByName(product_to_seed.name);
      if (existProduct)
        this.productService.deleteOne(existProduct._id)
      const product = await this.productService.insertOne(product_to_seed);
      products.push(product);
    }

    return products;
  }
}
