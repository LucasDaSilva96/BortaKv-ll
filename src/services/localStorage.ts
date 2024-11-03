import { CartProduct, CartState } from '@/stores/cart';

// The key to use in local storage for the cart
const cartKey = 'bortakvall_cart';

// Save the cart to local storage
export const saveCart = (cart: CartState) => {
  localStorage.setItem(cartKey, JSON.stringify(cart));
};

// Get the cart from local storage
export const getCart = () => {
  const cart = localStorage.getItem(cartKey);
  if (cart) {
    return JSON.parse(cart) as CartState;
  }
  return { cart: [] as CartProduct[], total_amount: 0, total_items: 0 };
};
