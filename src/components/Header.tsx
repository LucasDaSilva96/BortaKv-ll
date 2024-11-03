import { useEffect, useRef } from 'react';
import CartHeader from './CartHeader';
import Logo from './Logo';
import Nav from './Nav';
import { motion } from 'framer-motion';

export default function Header() {
  const headerRef = useRef<HTMLHeadElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!headerRef.current) return;
      if (window.scrollY > 50) {
        headerRef.current.classList.add('bg-slate-50', 'backdrop-blur-md');
      } else {
        headerRef.current.classList.remove('bg-slate-50', 'backdrop-blur-md');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      viewport={{
        once: true,
      }}
      transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.5 }}
      className='w-full px-2 md:px-6 flex items-center justify-between fixed top-0 left-0 py-3 z-[100] transition-colors'
      ref={headerRef}
    >
      <Logo />
      <div className='flex items-center gap-6'>
        <CartHeader />
        <Nav />
      </div>
    </motion.header>
  );
}
