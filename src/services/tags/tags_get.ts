import axios from 'axios';
import { BASE_URL } from '../api_resources';
import type { Tag } from '@/types/tags';

export const getTags = async () => {
  const response = await axios.get<{ data: Tag[] }>(BASE_URL + '/tags');

  return response.data.data;
};
