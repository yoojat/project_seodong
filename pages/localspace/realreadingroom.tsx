import ContentContainer from '@components/Project/ContentContainer';
import type { NextPage } from 'next';
import Image from 'next/image';
import SimpleImageSlider from 'react-simple-image-slider';
import ImgSrc from '../../public/localspace/realreadingroom/1.jpeg';

const images = [
  { url: '/localspace/ministudio/slideImgs/1.jpeg' },
  { url: '/localspace/ministudio/slideImgs/2.jpeg' },
  { url: '/localspace/ministudio/slideImgs/3.jpeg' },
  { url: '/localspace/ministudio/slideImgs/4.jpeg' },
  { url: '/localspace/ministudio/slideImgs/5.jpeg' },
  { url: '/localspace/ministudio/slideImgs/6.jpeg' },
  { url: '/localspace/ministudio/slideImgs/7.jpeg' },
  { url: '/localspace/ministudio/slideImgs/8.jpeg' },
  { url: '/localspace/ministudio/slideImgs/9.jpeg' },
  { url: '/localspace/ministudio/slideImgs/10.jpeg' },
];

const RealReadingRoom: NextPage = () => {
  return (
    <>
      <ContentContainer>
        <div>
          <div>
            <h2 className='text-lg font-medium my-6'>진짜 독서실</h2>
            <p className='my-4'>책읽는 것에만 집중하는 공간은 없을까?</p>
            <p className='my-4'>우리 주위에는 흥미로운것들이 많습니다.</p>
            <p className='my-4'>그러한 것들 덕분에 항상 흥미를 유발하지만,</p>
            <p className='my-4'>
              한편으론, 아무것도 하지 않거나 온전히 하나에 집중하는 것이 힘들어
              졌습니다.
            </p>
            <p className='my-4'>독서 또한 마찬가지 입니다.</p>
            <p className='my-4'>
              책보다 재미난 것들이 우리 주위에는 너무 많이 존재하고 있습니다.
            </p>

            <p className='my-4'>
              가끔은, 독서만 집중하면서 힐링하는 시간을 가져보면 어떨까요?
            </p>
            <p className='my-4'>느린 일상을 경험하고 싶거나,</p>
            <p className='my-4'>
              아무 생각없이 책만 읽고 싶을때 진짜 독서실을 추천드려요.
            </p>
          </div>
          <div>
            <Image
              src={ImgSrc}
              alt='진짜 독서실'
              width={500}
              height={350}
              objectFit={'cover'}
              placeholder='blur'
            />
          </div>
        </div>
      </ContentContainer>
    </>
  );
};

export default RealReadingRoom;
