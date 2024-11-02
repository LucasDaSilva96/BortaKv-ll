import { AiOutlineLoading3Quarters } from 'react-icons/ai';

export default function ImageLoader() {
  return (
    <div className='w-full h-full flex items-center justify-center absolute inset-0 backdrop-blur-md'>
      <AiOutlineLoading3Quarters
        className='animate-spin text-black'
        size={28}
      />
    </div>
  );
}
