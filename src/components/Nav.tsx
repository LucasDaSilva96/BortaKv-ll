import { CiMenuFries } from 'react-icons/ci';

export default function Nav() {
  return (
    <nav className='text-slate-50 cursor-pointer active:text-slate-50/50'>
      <button>
        <CiMenuFries size={28} />
      </button>
    </nav>
  );
}
