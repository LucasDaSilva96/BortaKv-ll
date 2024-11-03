import { CartProduct, CartState } from '@/stores/cart';

const cartKey = 'bortakvall_cart';

export const saveCart = (cart: CartState) => {
  localStorage.setItem(cartKey, JSON.stringify(cart));
};

export const getCart = () => {
  const cart = localStorage.getItem(cartKey);
  if (cart) {
    return JSON.parse(cart) as CartState;
  }
  return { cart: [] as CartProduct[], total_amount: 0, total_items: 0 };
};
