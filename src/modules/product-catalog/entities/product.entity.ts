import { uuidv4 } from '@utils';
import { Expose, plainToClass } from 'class-transformer';
import { Column, Entity, ObjectIdColumn } from "typeorm";
import { ProductOptionGroup, Variation } from '../models';

@Entity('products')
export class ProductEntity {
  @Expose()
  @ObjectIdColumn()
  _id: string;

  @Expose()
  @Column()
  name: string;

  @Expose()
  @Column()
  isActive: boolean;

  @Expose()
  @Column()
  createdAt: number;

  @Expose()
  @Column()
  price: number;

  @Expose()
  @Column()
  productOptionGroup: ProductOptionGroup[];

  @Expose()
  @Column()
  variations: Variation[];

  constructor(product: Partial<ProductEntity>) {
    if (product) {
      Object.assign(
        this,
        plainToClass(ProductEntity, product, {
          excludeExtraneousValues: true
        })
      )
      this._id = this._id || uuidv4()
      this.createdAt = +new Date();
      this.isActive = true;
    }
  }
}
