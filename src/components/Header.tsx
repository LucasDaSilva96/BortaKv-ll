import { useEffect, useRef } from 'react';
import CartHeader from './CartHeader';
import Logo from './Logo';
import Nav from './Nav';

export default function Header() {
  const headerRef = useRef<HTMLHeadElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!headerRef.current) return;
      if (window.scrollY > 100) {
        headerRef.current.classList.add('bg-slate-50', 'backdrop-blur-md');
      } else {
        headerRef.current.classList.remove('bg-slate-50', 'backdrop-blur-md');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className='w-full px-2 md:px-6 flex items-center justify-between fixed top-0 py-3 z-[100] transition-colors'
      ref={headerRef}
    >
      <Logo />
      <div className='flex items-center gap-6'>
        <CartHeader />
        <Nav />
      </div>
    </header>
  );
}
