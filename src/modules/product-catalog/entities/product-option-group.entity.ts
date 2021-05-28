import { Expose } from "class-transformer";
import { Column, Entity, ObjectIdColumn } from "typeorm";
import { Product, ProductOption } from "../models";

@Entity('product-option-groups')
export class ProductOptionGroupEntity {
  @Expose()
  @ObjectIdColumn()
  _id: string;

  @Expose()
  @Column()
  name: string;

  @Expose()
  @Column()
  options: ProductOption[]

  @Expose()
  @Column()
  product: Product
}
