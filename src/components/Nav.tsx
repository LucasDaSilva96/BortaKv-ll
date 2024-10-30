import { useModalsToggle } from '@/stores/modalToggle';
import { CiMenuFries } from 'react-icons/ci';
import { IoMdClose } from 'react-icons/io';

export default function Nav() {
  const { setIsNavOpen, isNavOpen } = useModalsToggle();

  const handleNavToggle = () => {
    setIsNavOpen();
  };

  return (
    <div className='text-black cursor-pointer active:text-black/50'>
      <button onClick={handleNavToggle}>
        {isNavOpen ? <IoMdClose size={28} /> : <CiMenuFries size={28} />}
      </button>
    </div>
  );
}
