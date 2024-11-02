import { getTags } from '@/services/tags/tags_get';
import { useModalsToggle } from '@/stores/modalToggle';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { Badge } from './ui/badge';

export default function NavModal() {
  const { isNavOpen, setIsNavOpen } = useModalsToggle();

  const { data: tags, isLoading } = useQuery({
    queryKey: ['tags'],
    queryFn: getTags,
  });

  const handleNavClose = () => {
    setIsNavOpen();
  };

  return (
    <div
      className={`fixed inset-0 flex z-50 transition-transform will-change-transform ease-in-out duration-300 ${
        isNavOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className='w-full h-full bg-black/30' onClick={setIsNavOpen} />
      <nav
        className={`bg-slate-50 w-[375px] h-full pt-20 px-2 pb-2 shadow-lg flex flex-col justify-evenly items-center`}
      >
        <Link
          onClick={handleNavClose}
          to='/'
          className='text-xl font-semibold text-primary'
        >
          Home
        </Link>

        <Link
          onClick={handleNavClose}
          className='text-xl font-semibold text-primary'
          to={'/products'}
        >
          Candy Heaven
        </Link>

        {isLoading && <p className='animate-bounce'>Loading...</p>}
        {tags &&
          tags.map((tag) => (
            <Link
              key={tag.id}
              onClick={handleNavClose}
              to={`/tag/${tag.id}`}
              className='text-xl font-semibold text-primary'
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
