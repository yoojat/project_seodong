import type { NextPage } from 'next';
import tw from 'tailwind-styled-components';
import SimpleImageSlider from 'react-simple-image-slider';
import Link from 'next/link';

const images = [{ url: 'img/main/1.jpg' }, { url: 'img/main/4.jpg' }];

const Home: NextPage = () => {
  return (
    <div className='h-screen'>
      <div className='-z-10'>
        <SimpleImageSlider
          width={'100%'}
          height={'100vh'}
          images={images}
          showBullets={true}
          showNavs={false}
          autoPlay={true}
        />
      </div>
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center w-full mb-20'>
        <h1 className='lg:text-5xl text-3xl font-extralight select-none mt-36 lg:mt-0 lg:font-light'>
          The Project Seodong
        </h1>
        <h2 className='hidden lg:block mt-4'>서동 프로젝트</h2>
        <Link href='/entrance'>
          <a>
            <button className='font-light text-sm border-[0.5px] border-slate-50/30 px-6 py-2 hover:bg-slate-200 hover:text-black transition-colors duration-300 mt-7 mb-24'>
              들어가기
            </button>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Home;
