type SoldOutLabelProps = {
  stock_status: 'instock' | 'outofstock';
};

export default function SoldOutLabel({ stock_status }: SoldOutLabelProps) {
  if (stock_status === 'instock') return;
  return (
    <div className='absolute top-1 left-0 w-full z-20 flex items-center justify-center p-2 bg-black/70 rounded-t-md'>
      <p className='text-slate-50 font-bold'>Sold Out</p>
    </div>
  );
}
