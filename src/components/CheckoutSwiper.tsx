import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { CartProduct, useCart } from '@/stores/cart';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { CiCircleMinus, CiCirclePlus, CiCircleRemove } from 'react-icons/ci';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

type CheckoutSwiperProps = {
  cart: CartProduct[];
};

export default function CheckoutSwiper({ cart }: CheckoutSwiperProps) {
  const { increaseAmount, decreaseAmount, getItemQuantity, removeFromCart } =
    useCart();

  const handleIncreaseAmount = (product: CartProduct) => {
    if (product.stock_quantity <= getItemQuantity(product.id)) {
      toast.error('Stock quantity exceeded');
      return;
    }
    increaseAmount(product.id);
  };

  const handleDecreaseAmount = (product: CartProduct) => {
    decreaseAmount(product.id);
  };

  const handleRemoveFromCart = (product: CartProduct) => {
    removeFromCart(product.id);
  };
  return (
    <Swiper
      slidesPerView={'auto'}
      centeredSlides={true}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className='w-full h-full'
    >
      {cart.map((product) => (
        <SwiperSlide key={product.id}>
          <div className='w-full h-full bg-gray-100 flex justify-evenly p-2 rounded-md cursor-grab'>
            <div className='flex flex-col gap-1'>
              <h2 className='text-base md:text-xl font-semibold'>
                <span>{product.name}</span>
                <br />
                <span>{product.price}kr</span>
              </h2>
              <LazyLoadImage
                src={product.images.thumbnail}
                alt={product.name}
                effect='blur'
                className='w-auto h-[150px] rounded-sm'
              />
            </div>

            <div className='flex flex-col items-center self-center'>
              <div className='w-full flex items-center gap-3'>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleDecreaseAmount(product)}
                >
                  <CiCircleMinus size={28} />
                </motion.button>
                <div className='border py-1 px-4 rounded-md bg-slate-50'>
                  <span className='font-bold'>
                    {getItemQuantity(product.id)}
                  </span>
                </div>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleIncreaseAmount(product)}
                >
                  <CiCirclePlus size={28} />
                </motion.button>
              </div>
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => handleRemoveFromCart(product)}
                className='flex items-center gap-2 bg-red-600 text-white px-2 py-0.5 rounded-md mt-2'
              >
                <span className='text-lg'>Remove</span>
                <CiCircleRemove size={24} />
              </motion.button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
