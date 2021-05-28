import { Product, ProductOption } from ".";

export interface ProductOptionGroup {
  _id: string;
  name: string;
  options: ProductOption[]
  product: Product
}
