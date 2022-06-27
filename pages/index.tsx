import type { NextPage } from 'next';
import SimpleImageSlider from 'react-simple-image-slider';
import Link from 'next/link';

const images = [
  { url: 'img/main/7.jpeg' },
  { url: 'img/main/2.JPG' },
  { url: 'img/main/5.jpeg' },
  { url: 'img/main/8.jpeg' },
  { url: 'img/main/9.jpeg' },
];

const Home: NextPage = () => {
  return (
    <div className='h-screen'>
      <div className='mb-20 w-full max-w-6xl relative mx-auto'>
        <SimpleImageSlider
          width={'100%'}
          height={'90vh'}
          images={images}
          showBullets={true}
          showNavs={false}
          autoPlay={true}
        />
      </div>
      <div className='text-center w-full mb-80 '>
        <h2 className='hidden lg:block mt-4'>서동 프로젝트</h2>
        <Link href='/about'>
          <a>
            <button className='rounded-md font-medium text-sm border-[0.5px] bg-slate-600 text-white px-6 py-2 hover:bg-slate-200 hover:text-black transition-colors duration-300 mt-7 mb-24'>
              들어가기
            </button>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Home;
