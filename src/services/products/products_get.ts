import axios from 'axios';
import { BASE_URL } from '../api_resources';
import { Product } from '@/types/product';

export const getProducts = async () => {
  const response = await axios.get<Product[]>(BASE_URL + '/products');
  return response.data;
};
