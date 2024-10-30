import { MdOutlineShoppingBag, MdShoppingBag } from 'react-icons/md';

export default function CartHeader() {
  // TODO: Implement the cart state
  const hasItems = false;
  return (
    <div>
      {hasItems ? (
        <button className='text-slate-50 cursor-pointer active:text-slate-50/50'>
          <MdShoppingBag size={28} />
        </button>
      ) : (
        <button className='text-slate-50 cursor-pointer active:text-slate-50/50'>
          <MdOutlineShoppingBag size={28} />
        </button>
      )}
    </div>
  );
}
