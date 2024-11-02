import { Product } from '@/types/product';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Keyboard } from 'swiper/modules';
import { Link } from 'react-router-dom';
import TagsBox from './TagsBox';
import AddToCartBtn from './AddToCartBtn';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import ImageLoader from './ImageLoader';

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
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      centeredSlides={true}
      className='w-full'
    >
      {products.map((product) => (
        <SwiperSlide
          key={product.id}
          className='border !w-[300px] rounded-md px-4 pb-2 relative'
        >
          <LazyLoadImage
            src={product.images.thumbnail}
            alt={product.name}
            effect='blur'
            placeholder={<ImageLoader />}
            className='w-auto h-[200px] self-center justify-self-center'
          />
          <div className='py-2'>
            <h2 className='text-base font-semibold'>{product.name}</h2>
            <span className='font-bold'>{product.price} kr</span>
          </div>
          <div className='w-full flex items-center justify-between py-2'>
            <AddToCartBtn
              product={product}
              customClassName='bg-primary text-white px-4 py-2 rounded-md '
            />
            <Link
              to={`/product/${product.id}`}
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
