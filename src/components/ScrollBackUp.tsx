import { useEffect, useRef } from 'react';
import { FaAngleDoubleUp } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function ScrollBackUp() {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!buttonRef.current) return;

      if (window.scrollY > 500) {
        buttonRef.current.classList.remove('hidden');
        buttonRef.current.classList.add('block');
      } else {
        buttonRef.current.classList.remove('block');
        buttonRef.current.classList.add('hidden');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        duration: 0.5,
        type: 'spring',
        stiffness: 260,
        damping: 20,
      }}
      whileTap={{ scale: 0.8 }}
      ref={buttonRef}
      className='p-3 rounded-full fixed right-4 bottom-4 z-40 bg-pink hidden'
      onClick={handleClick}
    >
      <FaAngleDoubleUp size={28} className='text-white' />
    </motion.button>
  );
}
