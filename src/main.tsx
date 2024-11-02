import './index.css';
import 'swiper/swiper-bundle.css';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import HomePage from './pages/Home.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import RootLayout from './layouts/RootLayout.tsx';
import Products from './pages/Products.tsx';
import Product from './pages/Product.tsx';
import Tag from './pages/Tag.tsx';
import { Toaster } from 'react-hot-toast';
import { IoWarningOutline } from 'react-icons/io5';
import { MdDone } from 'react-icons/md';

// Router configuration
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'products',
        element: <Products />,
      },
      {
        path: 'product/:id',
        element: <Product />,
      },
      {
        path: 'tag/:id',
        element: <Tag />,
      },
    ],
  },
]);

// QueryClient configuration
export const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <Toaster
        position='top-center'
        toastOptions={{
          success: {
            style: {
              background: 'green',
              color: 'white',
            },
            duration: 2000,
            icon: <MdDone size={18} />,
          },
          error: {
            style: {
              background: 'red',
              color: 'white',
            },
            duration: 2000,
            icon: <IoWarningOutline size={18} />,
          },
        }}
      />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>
);
