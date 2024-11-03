import toast from 'react-hot-toast';
import { BASE_URL, USER_ID } from '../api_resources';
import { catchError } from '../catchError';
import axios from 'axios';
import { OrderResponse } from '@/types/order';

export const getOrder = async (order_id: string | undefined) => {
  if (!order_id) return;
  try {
    const response = await axios.get<{ data: OrderResponse }>(
      `${BASE_URL}/users/${USER_ID}/orders/${order_id}`
    );
    return response.data.data;
  } catch (error) {
    console.error(error);
    toast.error(catchError(error));
  }
};
