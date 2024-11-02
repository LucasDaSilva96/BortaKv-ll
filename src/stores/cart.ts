import { Product } from '@/types/product';
import { create } from 'zustand';

export interface CartProduct extends Product {
  amount: number;
}

interface State {
  cart: CartProduct[];
  total_amount: number;
  total_items: number;
}

type Action = {
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  increaseAmount: (id: number) => void;
  decreaseAmount: (id: number) => void;
  getItemQuantity: (id: number) => number;
  clearCart: () => void;
};

export const useCart = create<State & Action>((set) => ({
  cart: [],
  total_amount: 0,
  total_items: 0,
  addToCart: (product) => {
    set((state) => {
      const tempCart = [...state.cart];
      const tempItem = tempCart.find((item) => item.id === product.id);
      if (tempItem) {
        tempItem.amount += 1;
        state.total_amount += tempItem.price;
        state.total_items += 1;
      } else {
        const newItem = { ...product, amount: 1 };
        tempCart.push(newItem);
        state.total_amount += newItem.price;
        state.total_items += 1;
      }
      return {
        ...state,
        cart: tempCart,
      };
    });
  },
  removeFromCart: (id) => {
    set((state) => {
      const tempItems = state.cart.filter((item) => item.id !== id);
      return {
        ...state,
        cart: tempItems,
        total_amount: tempItems.reduce((acc, item) => {
          return acc + item.price * item.amount;
        }, 0),
        total_items: tempItems.reduce((acc, item) => {
          return acc + item.amount;
        }, 0),
      };
    });
  },
  increaseAmount: (id) => {
    set((state) => {
      const tempCart = state.cart.map((item) => {
        if (item.id === id) {
          state.total_amount += item.price;
          state.total_items += 1;
          return { ...item, amount: item.amount + 1 };
        }
        return item;
      });
      return {
        ...state,
        cart: tempCart,
      };
    });
  },
  decreaseAmount: (id) => {
    set((state) => {
      const tempCart = state.cart
        .map((item) => {
          if (item.id === id) {
            state.total_amount -= item.price;
            state.total_items -= 1;
            return { ...item, amount: item.amount - 1 };
          }
          return item;
        })
        .filter((item) => item.amount !== 0);

      return {
        ...state,
        cart: tempCart,
        total_amount: tempCart.length > 0 ? state.total_amount : 0,
        total_items: tempCart.length > 0 ? state.total_items : 0,
      };
    });
  },
  clearCart: () => {
    set((state) => {
      return {
        ...state,
        cart: [],
        total_amount: 0,
        total_items: 0,
      };
    });
  },
  getItemQuantity: (id): number => {
    const item = useCart.getState().cart.find((item) => item.id === id);
    return item ? item.amount : 0;
  },
}));
