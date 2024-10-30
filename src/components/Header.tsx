import CartHeader from './CartHeader';
import Logo from './Logo';
import Nav from './Nav';

export default function Header() {
  return (
    <header className='w-full flex items-center justify-between'>
      <Logo />
      <div className='flex items-center gap-6  px-2'>
        <CartHeader />
        <Nav />
      </div>
    </header>
  );
}
