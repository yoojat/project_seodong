import type { NextPage } from 'next';
import tw from 'tailwind-styled-components';
import SimpleImageSlider from 'react-simple-image-slider';

interface ButtonProps {
  $primary: boolean;
}

const Button = tw.button<ButtonProps>`
  flex
  ${(props: ButtonProps) =>
    props.$primary ? 'bg-indigo-600' : 'bg-indigo-300'}
`;

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
      <div
        className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
 text-white text-center w-full'
      >
        <h1 className='text-3xl font-extralight select-none mt-20'>
          The Project Seodong
        </h1>
        <button
          onClick={() => alert('준비중입니다.')}
          className='font-light text-sm border-[0.5px] border-slate-50/30 px-6 py-2 hover:bg-slate-200 hover:text-black transition-colors duration-300 mt-5 mb-10'
        >
          들어가기
        </button>
      </div>
    </div>
  );
};

export default Home;
