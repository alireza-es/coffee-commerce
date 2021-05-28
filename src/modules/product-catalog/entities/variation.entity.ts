import { Entity } from "typeorm";
import { ProductOption } from "../models";

@Entity()
export class VariationEntity {
  SKU: string;
  name: string;
  productOption: ProductOption;
  price: number;
  quantity: number;
}
