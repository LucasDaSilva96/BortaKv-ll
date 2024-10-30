import CartModal from '@/components/CartModal';
import Header from '@/components/Header';
import NavModal from '@/components/NavModal';

import { Outlet } from 'react-router-dom';

export default function RootLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <NavModal />
      <CartModal />
    </div>
  );
}
