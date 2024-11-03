import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <section className='container mx-auto px-4 py-20 text-center h-[80dvh] space-y-6'>
      <h1 className='text-4xl font-bold'>404 - Not Found</h1>
      <p className='mt-4'>The page you are looking for does not exist.</p>
      <Link to='/' className='mt-4 text-blue-500 hover:underline'>
        Go back to the home page
      </Link>
    </section>
  );
}
