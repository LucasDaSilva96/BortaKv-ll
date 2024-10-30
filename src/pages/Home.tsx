import ResponsivePlayer from '@/components/ResponsivePlayer';
import VIDEO from '/videos/candy_video.mp4';

function HomePage() {
  return (
    <>
      <ResponsivePlayer url={VIDEO} />
      <section className='z-10 w-full bg-transparent fixed inset-0 py-4 px-2'></section>
    </>
  );
}

export default HomePage;
