import ImageLoader from './ImageLoader';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { CartProduct, useCart } from '@/stores/cart';
import { CiCircleMinus, CiCirclePlus, CiCircleRemove } from 'react-icons/ci';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

export type CartItemBoxProps = {
  product: CartProduct;
};

export default function CartItemBox({ product }: CartItemBoxProps) {
  const { increaseAmount, decreaseAmount, getItemQuantity, removeFromCart } =
    useCart();

  const handleIncreaseAmount = () => {
    if (product.stock_quantity <= getItemQuantity(product.id)) {
      toast.error('Stock quantity exceeded');
      return;
    }
    increaseAmount(product.id);
  };

  const handleDecreaseAmount = () => {
    decreaseAmount(product.id);
  };

  const handleRemoveFromCart = () => {
    removeFromCart(product.id);
  };

  return (
    <div className='w-full flex flex-col items-center gap-2 relative border p-2'>
      <h2 className='text-lg font-semibold'>
        {product.name} - {product.price}kr
      </h2>
      <LazyLoadImage
        src={product.images.thumbnail}
        alt={product.name}
        effect='blur'
        placeholder={<ImageLoader />}
        className='w-auto h-[80px]'
      />
      <div className='w-full flex items-center justify-evenly'>
        <motion.button whileTap={{ scale: 0.9 }} onClick={handleDecreaseAmount}>
          <CiCircleMinus size={28} />
        </motion.button>
        <div className='border py-1 px-4 rounded-md'>
          <span className='font-bold'>{getItemQuantity(product.id)}</span>
        </div>
        <motion.button whileTap={{ scale: 0.9 }} onClick={handleIncreaseAmount}>
          <CiCirclePlus size={28} />
        </motion.button>
      </div>
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={handleRemoveFromCart}
        className='flex items-center gap-2 bg-red-600 text-white px-2 py-0.5 rounded-md mt-2'
      >
        <span className='text-lg'>Remove</span>
        <CiCircleRemove size={24} />
      </motion.button>
    </div>
  );
}
