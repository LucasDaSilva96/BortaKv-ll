import { Product } from '@/types/product';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Keyboard } from 'swiper/modules';
import { Link } from 'react-router-dom';
import TagsBox from './TagsBox';

type ProductsSwiperProps = {
  products: Product[] | undefined;
};

export default function ProductsSwiper({ products }: ProductsSwiperProps) {
  if (!products || !products.length) return null;

  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={'auto'}
      modules={[Navigation, Autoplay, Keyboard]}
      navigation
      keyboard
      grabCursor={true}
      loop
      autoplay={{ delay: 3500, disableOnInteraction: false }}
      centeredSlides={true}
      className='w-full'
    >
      {products.map((product) => (
        <SwiperSlide
          key={product.id}
          className='border !w-[300px] rounded-md px-4 pb-2'
        >
          <img
            src={product.images.thumbnail}
            alt={product.name}
            className='w-auto max-h-[200px] self-center justify-self-center'
          />
          <div className='py-2'>
            <h2 className='text-base font-semibold'>{product.name}</h2>
            <span className='font-bold'>{product.price} kr</span>
          </div>
          <div className='w-full flex items-center justify-between py-2'>
            <button className='bg-primary text-white px-4 py-2 rounded-md'>
              Add to cart
            </button>
            <Link
              to={`/products/${product.id}`}
              className='text-primary underline'
            >
              View details
            </Link>
          </div>
          <TagsBox tags={product.tags} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
