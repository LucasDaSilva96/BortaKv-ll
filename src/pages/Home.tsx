import ResponsivePlayer from '@/components/ResponsivePlayer';
import VIDEO from '/videos/candy_video.mp4';
import { useQuery } from '@tanstack/react-query';
import { getProducts } from '@/services/products/products_get';

function HomePage() {
  const { data: products, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  });

  return (
    <>
      <ResponsivePlayer url={VIDEO} />
      <section className='z-10 w-full bg-transparent fixed inset-0 py-4 px-2'>
        <h1 className='text-2xl font-bold text-center'>Products</h1>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <ul>
            {products?.map((product) => (
              <li key={product.id}>
                <h2>{product.name}</h2>
                <p>{product.stock_quantity}</p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}

export default HomePage;
