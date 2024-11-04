import { useCart } from '@/stores/cart';
import { Product } from '@/types/product';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

type AddToCartBtnProps = {
  product: Product;
  customClassName: string;
};

export default function AddToCartBtn({
  product,
  customClassName = 'bg-primary text-white text-base px-4 py-2 rounded-md',
}: AddToCartBtnProps) {
  const { getItemQuantity, addToCart } = useCart();

  const handleAddToCart = () => {
    if (getItemQuantity(product.id) + 1 > product.stock_quantity) {
      toast.error('Max stock quantity reached');
      return;
    }
    addToCart(product);
  };

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={handleAddToCart}
      className={customClassName}
    >
      ADD TO CART
    </motion.button>
  );
}
