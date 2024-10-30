import BigLoader from '@/components/BigLoader';
import CartModal from '@/components/CartModal';
import Header from '@/components/Header';
import NavModal from '@/components/NavModal';
import { getProducts } from '@/services/products/products_get';
import { useQuery } from '@tanstack/react-query';

import { Outlet } from 'react-router-dom';

export default function RootLayout() {
  const { isPending } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  });
  return (
    <div>
      <Header />
      <Outlet />
      <NavModal />
      <CartModal />
      {isPending && <BigLoader />}
    </div>
  );
}
