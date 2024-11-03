import AddToCartBtn from '@/components/AddToCartBtn';
import ImageLoader from '@/components/ImageLoader';
import SoldOutLabel from '@/components/SoldOutLabel';
import TagsBox from '@/components/TagsBox';
import { getProductsByTag } from '@/services/tags/productsByTag_get';
import { useQuery } from '@tanstack/react-query';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link, useParams } from 'react-router-dom';

export default function Tag() {
  const params = useParams<{ id: string }>();

  const { data, isLoading } = useQuery({
    queryKey: ['tag', params.id],
    queryFn: async () => await getProductsByTag(params.id),
  });

  return (
    <section className='w-full min-h-screen px-6 py-20 flex flex-col gap-20 overflow-x-hidden'>
      <h1 className='text-4xl text-center py-3 capitalize font-bold'>
        {data && data.name ? `${data.name} Candy` : <span>...</span>}
      </h1>

      {isLoading ? (
        <p className='animate-bounce'>Loading...</p>
      ) : (
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {data?.products?.map((product) => (
            <article
              key={product.id}
              className='bg-white shadow-md rounded-md p-6 flex flex-col gap-4 transition-all will-change-auto lg:hover:shadow-lg min-w-[250px] relative'
            >
              <SoldOutLabel
                stock_status={product.stock_status as 'instock' | 'outofstock'}
              />
              <LazyLoadImage
                src={product.images.thumbnail}
                alt={product.name}
                effect='blur'
                placeholder={<ImageLoader />}
                className={`w-full h-auto rounded-md ${
                  product.stock_status === 'instock'
                    ? 'filter-none'
                    : 'filter grayscale'
                }`}
              />
              <h2 className='text-xl font-semibold'>{product.name}</h2>
              <p className='text-lg font-semibold'>{product.price} kr</p>

              <div className='w-full flex items-center justify-between py-2'>
                {product.stock_status === 'instock' && (
                  <AddToCartBtn
                    product={product}
                    customClassName='bg-primary text-white text-base px-4 py-2 rounded-md'
                  />
                )}
                <Link
                  to={`/product/${product.id}`}
                  className='text-primary underline ml-auto'
                >
                  View details
                </Link>
              </div>

              <TagsBox tags={product.tags} />
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
