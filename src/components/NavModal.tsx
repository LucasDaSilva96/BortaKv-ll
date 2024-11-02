import { useModalsToggle } from '@/stores/modalToggle';

export default function NavModal() {
  const { isNavOpen, setIsNavOpen } = useModalsToggle();

  return (
    <div
      className={`fixed inset-0 flex z-50 transition-transform will-change-transform ease-in-out duration-300 ${
        isNavOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className='w-full h-full bg-black/30' onClick={setIsNavOpen} />
      <nav className={`bg-slate-50 w-[375px] h-full pt-20 px-2 pb-2 shadow-lg`}>
        NavModal
      </nav>
    </div>
  );
}
