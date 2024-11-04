import ResponsivePlayer from '@/components/ResponsivePlayer';
import VIDEO from '/videos/candy_video.mp4';
import { useQuery } from '@tanstack/react-query';
import ProductsSwiper from '@/components/ProductsSwiper';
import { getProductsByTag } from '@/services/tags/productsByTag_get';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import {
  animationContainer,
  fadeInLeft,
  fadeInRight,
} from '@/animation/variants';

function HomePage() {
  const { data, isLoading } = useQuery({
    queryKey: ['tag', '124'],
    queryFn: async () => await getProductsByTag('124'),
  });

  const controls_shop = useAnimation();
  const controls_money = useAnimation();
  const [shopDivRef, inViewShop] = useInView({
    threshold: [0.25],
    triggerOnce: true,
  });

  const [moneyDivRef, inViewMoney] = useInView({
    threshold: [0.25],
    triggerOnce: true,
  });

  useEffect(() => {
    if (inViewShop) {
      controls_shop.start('visible');
    } else {
      controls_shop.start('hidden');
    }

    if (inViewMoney) {
      controls_money.start('visible');
    } else {
      controls_money.start('hidden');
    }
  }, [controls_shop, controls_money, inViewShop, inViewMoney]);

  return (
    <section className='z-10 w-full bg-transparent h-full flex flex-col gap-20 pb-16'>
      {/*  */}
      <div className='w-full max-h-[500px] overflow-clip'>
        <ResponsivePlayer url={VIDEO} />
      </div>
      {/*  */}
      <div className='py-4 px-10 space-y-12'>
        <h1 className='text-4xl text-center py-3 capitalize font-bold'>
          treat yourself, you deserve it
        </h1>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <ProductsSwiper products={data?.products} />
        )}
      </div>

      <motion.div
        ref={shopDivRef}
        initial='hidden'
        animate={controls_shop}
        variants={animationContainer}
        className='w-full p-4 flex flex-col gap-4 md:flex-row justify-around max-w-[1200px] self-center items-center'
      >
        <motion.img
          src='https://images.unsplash.com/photo-1519087318609-bfb5c04c27f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='candy shop'
          variants={fadeInRight}
          className='max-w-[500px] h-auto w-full rounded-md'
        />

        <motion.article
          variants={fadeInLeft}
          className='space-y-12 text-center'
        >
          <h2 className='text-2xl text-center py-3 capitalize font-black'>
            Find the closest <span className='text-blue-400'>shop</span>
          </h2>

          <motion.button
            whileTap={{ scale: 0.9 }}
            className='bg-pink text-white px-4 py-2 rounded-md min-w-[200px] font-semibold'
          >
            Find now
          </motion.button>
        </motion.article>
      </motion.div>

      {/*  */}
      <motion.div
        ref={moneyDivRef}
        animate={controls_money}
        variants={animationContainer}
        className='w-full p-4 flex flex-col gap-4 md:flex-row justify-around max-w-[1200px] self-center items-center'
      >
        <motion.article
          variants={fadeInRight}
          className='space-y-12 text-center'
        >
          <h2 className='text-2xl text-center py-3 capitalize font-black'>
            DID YOU KNOW THAT
            <br />
            <span className='text-yellow-400'>YOUR CLASS OR ASSOCIATION</span>
            <br />
            CAN MAKE MONEY?
          </h2>
          <p className='text-lg max-w-[500px]'>
            It is both easy and fun to earn money for the class or association
            by selling tasty products.
          </p>
          <motion.button
            whileTap={{ scale: 0.9 }}
            className='bg-pink text-white px-4 py-2 rounded-md font-semibold'
          >
            I wanna know more
          </motion.button>
        </motion.article>

        <motion.img
          variants={fadeInLeft}
          className='w-auto max-h-[400px] rounded-md'
          src='https://images.unsplash.com/photo-1583440772344-edd2e043742c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNhbmR5JTIwc2hvcHxlbnwwfHwwfHx8MA%3D%3D'
          alt='image from hemakvall.se'
        />
      </motion.div>
    </section>
  );
}

export default HomePage;
