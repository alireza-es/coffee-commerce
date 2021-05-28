import { ProductOption } from ".";

export interface Variation {
  SKU: string;
  name: string;
  productOption: ProductOption;
  price: number;
  quantity: number;
}
