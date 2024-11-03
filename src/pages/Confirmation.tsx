import BigLoader from '@/components/BigLoader';
import ConfettiParticles from '@/components/ConfettiParticles';
import { getOrder } from '@/services/orders/order_get';
import { useCart } from '@/stores/cart';
import { Order_Item } from '@/types/order';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function Confirmation() {
  const { id } = useParams<{ id: string }>();

  const navigate = useNavigate();

  const { clearCart } = useCart();

  const { data: order, isLoading } = useQuery({
    queryKey: ['order', id],
    queryFn: async () => await getOrder(id),
  });

  const formatItemsQuantity = (items: Order_Item[]) => {
    return items.reduce((acc, item) => acc + item.qty, 0);
  };

  useEffect(() => {
    if (order) {
      clearCart();
    }
  }, [order, clearCart]);

  if (isLoading) {
    return (
      <div className='w-full min-h-screen'>
        <BigLoader />;
      </div>
    );
  }

  if (!order) {
    return (
      <section className='w-full min-h-svh px-6 py-20 flex flex-col items-center gap-3'>
        <h1 className='text-4xl text-center py-3 capitalize font-bold'>
          Order not found
        </h1>
      </section>
    );
  }

  return (
    <section className='w-full min-h-svh px-6 py-20 flex flex-col items-center gap-3'>
      <h1 className='text-4xl text-center py-3 capitalize font-bold'>
        Order - #{order.id}
      </h1>
      <h2 className='text-xl max-w-lg text-center'>
        Thank you {order.customer_first_name} for your order. We hope to see you
        again, and enjoy the {formatItemsQuantity(order.items)} items you
        ordered.
        <p className='text-lg text-center mt-4'>
          We appreciate your business and hope you enjoy your purchase. If you
          have any questions or need further assistance, please don't hesitate
          to contact us.
        </p>
      </h2>
      <p className='text-lg'>
        <strong>Order total: </strong>
        {order.order_total}kr
      </p>
      <p className='text-lg'>
        <strong>Order items:</strong> {formatItemsQuantity(order.items)}
      </p>
      <button
        onClick={() => navigate('/')}
        className='bg-black text-slate-50 py-1 px-4 rounded-md font-semibold mt-4'
        type='button'
      >
        Go back home
      </button>
      <ConfettiParticles />
    </section>
  );
}
