import axios from 'axios';
import { BASE_URL } from '../api_resources';
import { TagsResponse } from '@/types/tags';
import toast from 'react-hot-toast';
import { catchError } from '../catchError';

// Get all products by tag from the API, adjust the image URLs
export const getProductsByTag = async (id: string | undefined) => {
  if (!id) return;

  try {
    const response = await axios.get<{ data: TagsResponse }>(
      BASE_URL + '/tags/' + id
    );

    response.data.data.products.forEach((product) => {
      product.images.thumbnail = `https://www.bortakvall.se/${product.images.thumbnail}`;

      product.images.large = `https://www.bortakvall.se/${product.images.large}`;
    });
    return response.data.data;
  } catch (e) {
    console.error(e);
    toast.error(catchError(e));
  }
};
