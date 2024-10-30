import { LuLoader2 } from 'react-icons/lu';

export default function BigLoader() {
  return (
    <div className='z-[200] fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center'>
      <LuLoader2 size={28} className='animate-spin text-slate-50' />
    </div>
  );
}
