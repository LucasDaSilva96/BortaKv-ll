import TagsBox from '@/components/TagsBox';
import { getProductsByTag } from '@/services/tags/productsByTag_get';
import { useQuery } from '@tanstack/react-query';
import { Link, useParams } from 'react-router-dom';

export default function Tag() {
  const params = useParams<{ slug: string }>();

  const { data, isLoading } = useQuery({
    queryKey: ['tag', params.slug],
    queryFn: async () => await getProductsByTag(params.slug),
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
              className='bg-white shadow-md rounded-md p-6 flex flex-col gap-4 transition-all will-change-auto lg:hover:shadow-lg min-w-[250px]'
            >
              <img
                src={product.images.thumbnail}
                alt={product.name}
                className='w-full h-auto rounded-md'
              />
              <h2 className='text-xl font-semibold'>{product.name}</h2>
              <p className='text-lg font-semibold'>{product.price} kr</p>

              <div className='w-full flex items-center justify-between py-2'>
                <button className='bg-primary text-white px-4 py-2 rounded-md'>
                  Add to cart
                </button>
                <Link
                  to={`/product/${product.id}`}
                  className='text-primary underline'
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
