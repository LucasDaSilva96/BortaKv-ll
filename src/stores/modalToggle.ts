import { create } from 'zustand';

type State = {
  isCartOpen: boolean;
  isNavOpen: boolean;
};

type Action = {
  setIsCartOpen: () => void;
  setIsNavOpen: () => void;
};

export const useModalsToggle = create<State & Action>((set) => ({
  isCartOpen: false,
  isNavOpen: false,
  setIsCartOpen: () => {
    set((state) => ({
      isCartOpen: !state.isCartOpen,
      isNavOpen: state.isCartOpen ? state.isNavOpen : false,
    }));
  },
  setIsNavOpen: () => {
    set((state) => ({
      isNavOpen: !state.isNavOpen,
      isCartOpen: state.isNavOpen ? state.isCartOpen : false,
    }));
  },
}));
