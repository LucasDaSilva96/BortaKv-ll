import { Product } from './product';

export interface Tag {
  id: number;
  name: string;
  slug: string;
}

export interface TagsResponse extends Tag {
  products: Product[];
}
