import BigLoader from '@/components/BigLoader';
import CartModal from '@/components/CartModal';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import NavModal from '@/components/NavModal';
import ScrollBackUp from '@/components/ScrollBackUp';
import { getProducts } from '@/services/products/products_get';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';

import { Outlet, useSearchParams } from 'react-router-dom';

export default function RootLayout() {
  const url = useSearchParams();
  const { isPending } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  });

  // Scroll to top on route change for better UX
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [url]);

  return (
    <main>
      <Header />
      <Outlet />
      <NavModal />
      <CartModal />
      {isPending && <BigLoader />}
      <ScrollBackUp />
      <Footer />
    </main>
  );
}
