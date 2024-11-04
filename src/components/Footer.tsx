import Logo from './Logo';
import {
  FaInstagram,
  FaTiktok,
  FaFacebookF,
  FaLinkedinIn,
  FaGithubSquare,
  FaLinkedin,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className='w-full p-6 bg-black text-white min-h-[500px] flex flex-col items-center gap-12 relative'>
      <Logo />

      <div className='flex flex-col md:flex-row flex-wrap gap-4 justify-evenly w-full max-w-[1200px] items-center md:items-start text-center md:text-start'>
        <div className='uppercase font-bold space-y-2 transition-colors will-change-auto ease-in-out duration-300'>
          <h3 className='font-black text-xl text-orange-500'>
            About BortaKväll
          </h3>
          <p className='!mt-8 active:text-orange-500 lg:hover:text-orange-500 cursor-pointer'>
            About bortakväll
          </p>
          <p className=' active:text-orange-500 lg:hover:text-orange-500 cursor-pointer'>
            Contact us
          </p>
          <p className=' active:text-orange-500 lg:hover:text-orange-500 cursor-pointer'>
            Available positions
          </p>
          <p className=' active:text-orange-500 lg:hover:text-orange-500 cursor-pointer'>
            BECOME A FRANCHISEE
          </p>
        </div>

        <div className='uppercase font-bold space-y-2 transition-colors will-change-auto ease-in-out duration-300'>
          <h3 className='font-black text-xl text-blue-500'>Stores</h3>
          <p className='!mt-8  active:text-blue-500 lg:hover:text-blue-500 cursor-pointer'>
            Find store
          </p>
        </div>

        <div className='uppercase font-bold space-y-2 transition-colors will-change-auto ease-in-out duration-300'>
          <h3 className='font-black text-xl text-yellow-400'>
            THE CUSTOMER CLUB
          </h3>
          <p className='!mt-8  active:text-yellow-400 lg:hover:text-yellow-400 cursor-pointer'>
            HOME EVENING CUSTOMER CLUB
          </p>
          <p className=' active:text-yellow-400 lg:hover:text-yellow-400 cursor-pointer'>
            DOWNLOAD FOR IPHONE
          </p>
          <p className=' active:text-yellow-400 lg:hover:text-yellow-400 cursor-pointer'>
            DOWNLOAD FOR ANDROID
          </p>
        </div>

        <div className='uppercase font-bold space-y-2 transition-colors will-change-auto ease-in-out duration-300'>
          <h3 className='font-black text-xl text-pink'>FOLLOW US</h3>
          <div className='!mt-8  active:text-pink lg:hover:text-pink cursor-pointer items-center flex flex-col gap-1'>
            <div className=' !bg-white w-12 h-12 rounded-full flex items-center justify-center'>
              <FaInstagram size={38} className='text-black' />
            </div>
            <span>instagram</span>
          </div>
          <div className=' active:text-pink lg:hover:text-pink cursor-pointer items-center flex flex-col gap-1'>
            <div className=' !bg-white w-12 h-12 rounded-full flex items-center justify-center'>
              <FaTiktok size={38} className='text-black' />
            </div>
            <span>tiktok</span>
          </div>
          <div className=' active:text-pink lg:hover:text-pink cursor-pointer items-center flex flex-col gap-1'>
            <div className=' !bg-white w-12 h-12 rounded-full flex items-center justify-center'>
              <FaFacebookF size={38} className='text-black' />
            </div>
            <span>facebook</span>
          </div>
          <div className=' active:text-pink lg:hover:text-pink cursor-pointer items-center flex flex-col gap-1'>
            <div className=' !bg-white w-12 h-12 rounded-full flex items-center justify-center'>
              <FaLinkedinIn size={38} className='text-black' />
            </div>
            <span>linkedin</span>
          </div>
        </div>
      </div>

      <div className='w-full flex items-center justify-center flex-wrap px-4 gap-4'>
        <p className='text-center'>
          © {new Date().getFullYear()} BortaKväll. All rights reserved. Privacy
          Policy
        </p>
        <p className='text-center'>
          BortaKväll is a registered trademark of BortaKväll AB.
        </p>
      </div>
      <div className='w-[300px] flex items-center justify-evenly'>
        <p>
          Creator:{' '}
          <a
            href='https://github.com/LucasDaSilva96'
            target='_blank'
            rel='noopener noreferrer'
            className='font-bold text-blue-500 lg:hover:text-blue-400'
          >
            Lucas Da Silva
          </a>
        </p>
        <a
          href='https://github.com/LucasDaSilva96'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaGithubSquare
            size={28}
            className='text-white active:text-blue-500 lg:hover:text-blue-500 transition-all will-change-auto'
          />
        </a>
        <a
          href='https://www.linkedin.com/in/lucas-da-silva-9955911a0/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaLinkedin
            size={28}
            className='text-white active:text-blue-500 lg:hover:text-blue-500 transition-all will-change-auto'
          />
        </a>
      </div>
    </footer>
  );
}
