import { useCart } from '@/stores/cart';
import { useModalsToggle } from '@/stores/modalToggle';
import CartItemBox from './CartItemBox';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function CartModal() {
  const { setIsCartOpen, isCartOpen } = useModalsToggle();

  const { cart, total_amount, total_items, clearCart } = useCart();

  const handleClearCart = () => {
    clearCart();
  };

  return (
    <div
      className={`fixed inset-0 flex z-50 transition-transform will-change-transform ease-in-out duration-300 ${
        isCartOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className='w-full h-full bg-black/30' onClick={setIsCartOpen} />
      <div
        className={`bg-slate-50 !min-w-[300px] h-screen overflow-x-hidden pt-20 px-2 pb-2 shadow-lg flex flex-col gap-4`}
      >
        <div className='w-full h-[80%] overflow-y-auto flex flex-col gap-2'>
          {cart.length > 0 ? (
            cart.map((product) => (
              <CartItemBox key={product.id} product={product} />
            ))
          ) : (
            <h1 className='font-black text-center'>Empty</h1>
          )}
        </div>
        {cart.length > 0 && (
          <>
            <hr className='h-[2px] bg-pink' />

            <div className='w-full flex flex-col gap-2'>
              <h2 className='text-center text-lg font-semibold'>Overview</h2>
              <div className='w-fu flex items-center flex-col gap-2'>
                <p>
                  Total amount: <span>{total_amount}</span> kr
                </p>
                <p>
                  Total items: <span>{total_items}</span>
                </p>
              </div>
            </div>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={handleClearCart}
              className='bg-red-600 text-slate-50 p-2 rounded-md font-semibold'
            >
              Clear cart
            </motion.button>

            <Link
              onClick={setIsCartOpen}
              to='/checkout'
              className='bg-primary text-white p-2 rounded-md text-center'
            >
              Checkout
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
