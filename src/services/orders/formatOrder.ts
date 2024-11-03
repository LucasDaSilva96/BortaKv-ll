import { CartProduct } from '@/stores/cart';
import { Order_Item } from '@/types/order';

export const formatOrder = (cart: CartProduct[]) => {
  const items = cart.map((item) => {
    return {
      product_id: item.id,
      qty: item.amount,
      item_price: item.price,
      item_total: item.amount * item.price,
    };
  });

  return items as Order_Item[];
};
