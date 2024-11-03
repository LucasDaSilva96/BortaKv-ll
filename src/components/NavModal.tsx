import { getTags } from '@/services/tags/tags_get';
import { useModalsToggle } from '@/stores/modalToggle';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { Badge } from './ui/badge';
import { LuCandy } from 'react-icons/lu';
import { IoIosHome } from 'react-icons/io';
import { stagger } from 'framer-motion';
import { animate } from 'framer-motion/dom';
import { useEffect } from 'react';

export default function NavModal() {
  const { isNavOpen, setIsNavOpen } = useModalsToggle();

  const { data: tags, isLoading } = useQuery({
    queryKey: ['tags'],
    queryFn: getTags,
  });

  const handleNavClose = () => {
    setIsNavOpen();
  };

  useEffect(() => {
    if (isNavOpen) {
      animate(
        '.nav-link',
        { x: 0, opacity: 1, scale: 1 },
        { delay: stagger(0.1) }
      );
    } else {
      animate('.nav-link', { x: '-200%', opacity: 0, scale: 0.5 });
    }
  }, [isNavOpen]);

  return (
    <div
      className={`fixed inset-0 flex z-50 transition-transform will-change-transform ease-in-out duration-300 ${
        isNavOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className='w-full h-full bg-black/30' onClick={setIsNavOpen} />
      <nav
        className={`bg-slate-50 !min-w-[300px] h-full pt-20 px-2 pb-2 shadow-lg flex flex-col justify-evenly items-center overflow-x-hidden`}
      >
        <Link
          onClick={handleNavClose}
          to='/'
          className='text-xl font-semibold text-primary flex items-center gap-2 transition-all will-change-auto active:text-pink active:underline lg:hover:text-pink lg:hover:underline nav-link '
        >
          <span>Home</span>
          <IoIosHome size={22} className='text-pink' />
        </Link>

        <Link
          onClick={handleNavClose}
          to={'/products'}
          className='text-xl font-semibold text-primary flex items-center gap-2 transition-all will-change-auto active:text-pink active:underline lg:hover:text-pink lg:hover:underline nav-link '
        >
          <span>All Products</span>
          <LuCandy size={22} className='text-pink' />
        </Link>

        {isLoading && <p className='animate-bounce'>Loading...</p>}
        {tags &&
          tags.map((tag) => (
            <Link
              key={tag.id}
              onClick={handleNavClose}
              to={`/tag/${tag.id}`}
              className='text-xl font-semibold text-primary nav-link '
            >
              <Badge className='bg-pink py-1.5 min-w-[100px] flex items-center justify-center'>
                {tag.name}
              </Badge>
            </Link>
          ))}
      </nav>
    </div>
  );
}
