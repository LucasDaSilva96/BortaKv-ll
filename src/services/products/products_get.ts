import axios from 'axios';
import { BASE_URL } from '../api_resources';
import { Product } from '@/types/product';

export const getProducts = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await axios.get<{ data: Product[] }>(BASE_URL + '/products');
  return response.data.data;
};
