import { useCart } from '@/stores/cart';
import { useModalsToggle } from '@/stores/modalToggle';
import { MdOutlineShoppingBag, MdShoppingBag } from 'react-icons/md';

export default function CartHeader() {
  const { cart } = useCart();

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
          <MdShoppingBag size={28} />
        ) : (
          <MdOutlineShoppingBag size={28} />
        )}
      </button>
    </div>
  );
}
