import { Order, OrderResponse } from '@/types/order';
import { BASE_URL, USER_ID } from '../api_resources';
import toast from 'react-hot-toast';
import { catchError } from '../catchError';
import axios from 'axios';

export const createOrder = async (order: Order) => {
  try {
    const request = await axios.post<{ data: OrderResponse }>(
      `${BASE_URL}/users/${USER_ID}/orders`,
      order
    );
    console.log(request.data); // ✅ This will be type-safe
    return request.data.data;
  } catch (error) {
    console.error(error);
    toast.error(catchError(error));
  }
};
