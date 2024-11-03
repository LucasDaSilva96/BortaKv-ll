import axios from 'axios';
import { BASE_URL } from '../api_resources';
import type { Tag } from '@/types/tags';
import toast from 'react-hot-toast';
import { catchError } from '../catchError';

export const getTags = async () => {
  try {
    const response = await axios.get<{ data: Tag[] }>(BASE_URL + '/tags');

    return response.data.data;
  } catch (error) {
    console.error(error);
    toast.error(catchError(error));
  }
};
