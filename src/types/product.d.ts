import { Tag } from './tags';

export interface Product {
  id: number;
  name: string;
  price: number;
  on_sale: boolean;
  images: {
    thumbnail: string;
    large: string;
  };
  stock_status: string;
  stock_quantity: number;
  tags: Tag[];
}

export interface ProductDetail extends Product {
  description: string;
}
