import CartHeader from './CartHeader';
import Logo from './Logo';
import Nav from './Nav';

export default function Header() {
  return (
    <header className='w-full px-2 md:px-6 flex items-center justify-between fixed top-4 z-[100]'>
      <Logo />
      <div className='flex items-center gap-6'>
        <CartHeader />
        <Nav />
      </div>
    </header>
  );
}
