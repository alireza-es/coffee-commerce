
export interface Variation {
  SKU?: string;
  name?: string;
  productOptions?: {
    [k: string]:
    | boolean
    | string
    | number;
  }
  price?: number;
  quantity?: number;
}
