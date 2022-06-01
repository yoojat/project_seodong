import type { NextPage } from 'next';
import Image from 'next/image';
import tw from 'tailwind-styled-components';

const CotentBackContainer = tw.div`
  mx-5
  mt-24
`;
const ContentContainer = tw.div`
  w-full
  max-w-5xl
  font-light
  text-sm
  mx-auto
  border-b
`;

const Home: NextPage = () => {
  return (
    <>
      <div className='h-44 md:h-36 lg:h-96 w-full relative'>
        <Image
          src='/entrance/main.jpeg'
          alt='서동 메인 이미지'
          layout='fill'
          objectFit='cover'
        />
        <div className='text-white absolute bottom-10 font-medium text-lg lg:text-2xl w-full text-left max-w-6xl left-1/2 -translate-x-1/2'>
          <span className='ml-28'>들어가며</span>
        </div>
      </div>

      <CotentBackContainer>
        <ContentContainer>
          <p className='my-4'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam,
          </p>
          <p className='my-4'>
            suscipit? Beatae impedit hic quidem, voluptatem debitis,
            accusantium,
          </p>
          <p className='my-4'>
            facere incidunt cum modi nesciunt possimus fugiat exercitationem id
          </p>
          <p className='my-4'>libero saepe ab illo!</p>
        </ContentContainer>
      </CotentBackContainer>
    </>
  );
};

export default Home;
