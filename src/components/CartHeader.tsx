import { useCart } from '@/stores/cart';
import { useModalsToggle } from '@/stores/modalToggle';
import { MdOutlineShoppingBag, MdShoppingBag } from 'react-icons/md';

export default function CartHeader() {
  const { cart, total_items } = useCart();

  const { setIsCartOpen } = useModalsToggle();

  const handleToggle = () => {
    setIsCartOpen();
  };

  return (
    <div>
      <button
        onClick={handleToggle}
        className='text-black cursor-pointer active:text-black/50'
      >
        {cart.length ? (
          <div className='relative'>
            <MdShoppingBag size={28} />
            <span className='absolute -top-2 -right-2 bg-pink text-xs text-white rounded-full px-1 animate-bounce shadow-md'>
              {total_items}
            </span>
          </div>
        ) : (
          <MdOutlineShoppingBag size={28} />
        )}
      </button>
    </div>
  );
}
