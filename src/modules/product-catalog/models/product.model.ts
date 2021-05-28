import { ProductOptionGroup, Variation } from ".";

export interface Product {
  _id: string;
  name: string;
  isActive: boolean;
  createdAt: number;
  price: number;
  productOptionGroup: ProductOptionGroup[];
  variations: Variation[];
}
