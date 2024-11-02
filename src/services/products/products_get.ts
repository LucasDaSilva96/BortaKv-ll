import axios from 'axios';
import { BASE_URL } from '../api_resources';
import { Product } from '@/types/product';

// Get all products from the API, adjust the image URLs
export const getProducts = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await axios.get<{ data: Product[] }>(BASE_URL + '/products');

  response.data.data.forEach((product) => {
    product.images.thumbnail = `https://www.bortakvall.se/${product.images.thumbnail}`;

    product.images.large = `https://www.bortakvall.se/${product.images.large}`;
  });
  return response.data.data;
};
