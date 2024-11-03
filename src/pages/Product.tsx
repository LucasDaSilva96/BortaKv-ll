import TagsBox from '@/components/TagsBox';
import { getProductById } from '@/services/products/products_get';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ImageLoader from '@/components/ImageLoader';
import AddToCartBtn from '@/components/AddToCartBtn';
import SoldOutLabel from '@/components/SoldOutLabel';

export default function Product() {
  const params = useParams<{ id: string }>();

  const { data, isLoading } = useQuery({
    queryKey: ['product', params.id],
    queryFn: async () => await getProductById(params.id),
  });

  if (!data) return <p>Product not found</p>;

  return (
    <section className='w-full min-h-svh px-6 pt-40 pb-20 flex flex-col items-center gap-3'>
      <h1 className='text-4xl text-center py-3 capitalize font-bold'>
        {data && data.name ? data.name : 'Product'}
      </h1>
      {isLoading ? (
        <p className='animate-bounce'>Loading...</p>
      ) : (
        <article className='bg-white shadow-md rounded-md p-6 flex flex-col gap-4 transition-all will-change-auto lg:hover:shadow-lg min-w-[250px] max-w-[600px] relative'>
          <SoldOutLabel
            stock_status={data.stock_status as 'instock' | 'outofstock'}
          />
          <LazyLoadImage
            src={data.images.large}
            alt={data.name}
            effect='blur'
            placeholder={<ImageLoader />}
            className={`w-full h-auto rounded-md ${
              data.stock_status === 'instock'
                ? 'filter-none'
                : 'filter grayscale'
            }`}
          />
          <h2 className='text-xl font-semibold'>{data?.name}</h2>
          <p className='text-lg font-semibold'>{data?.price} kr</p>

          <div dangerouslySetInnerHTML={{ __html: data.description }}></div>

          <div className='w-full flex items-center justify-between py-2'>
            {data.stock_status === 'instock' && (
              <AddToCartBtn
                product={data}
                customClassName='bg-primary text-white text-base px-4 py-2 rounded-md'
              />
            )}
          </div>

          <TagsBox tags={data.tags} />
        </article>
      )}
    </section>
  );
}
