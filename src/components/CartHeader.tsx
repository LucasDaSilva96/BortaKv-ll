import { useModalsToggle } from '@/stores/modalToggle';
import { MdOutlineShoppingBag, MdShoppingBag } from 'react-icons/md';

export default function CartHeader() {
  // TODO: Implement the cart state
  const hasItems = false;

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
        {hasItems ? (
          <MdShoppingBag size={28} />
        ) : (
          <MdOutlineShoppingBag size={28} />
        )}
      </button>
    </div>
  );
}
