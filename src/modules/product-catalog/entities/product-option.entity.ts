import { Expose } from "class-transformer";
import { Column, Entity, ObjectIdColumn } from "typeorm";
import { ProductOptionGroup } from "../models";

@Entity('product-options')
export class ProductOptionEntity {
  @Expose()
  @ObjectIdColumn()
  _id: string;

  @Expose()
  @Column()
  value: string

  @Expose()
  @Column()
  OptionGroup: ProductOptionGroup
}
