import { generateTextColor } from '@/services/generateTextColor';
import { Link } from 'react-router-dom';

export default function Logo() {
  const logo = 'bortakväll';

  return (
    <aside>
      <Link
        to={'/'}
        className='uppercase text-xl md:text-3xl bg-black flex items-center justify-center py-2.5 gap-[1px] px-4 text-white font-bold shadow-lg'
      >
        {logo.split('').map((letter, index) => (
          <span className={`${generateTextColor(index)}`} key={index}>
            {letter}
          </span>
        ))}
      </Link>
    </aside>
  );
}
