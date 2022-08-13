import ContentContainer from '@components/Project/ContentContainer';
import type { NextPage } from 'next';
import Image from 'next/image';
import ImageSrc1 from '../../public/localplace/localplace1.jpg';
import ImageSrc2 from '../../public/localplace/localplace2.jpg';

const Localplace: NextPage = () => {
  return (
    <>
      <ContentContainer>
        <h2 className='text-lg font-medium my-6'>서동고개에 가면</h2>

        <p className='my-3'>
          서동고개는 재개발의 가속화로 아파트 단지가 급속도로 지어지는 부산의 몇
          안 남은 산복마을입니다.
        </p>
        <div className='h-3' />
        <p className='my-3'>
          서동고개를 제대로 알려면 수고스럽게 고개를 올라야 합니다.
        </p>
        <p className='my-3'>
          높은 고개를 넘어가다 보면 골목마다 양옆으로 비좁게 붙어있는 독채를 볼
          수 있습니다.
        </p>
        <p className='my-3'>
          이 골목길을 따라 걷다 보면, 80~90년대의 부산을 볼 수 있습니다.
        </p>
        <div className='h-3' />

        <p className='my-3'>
          감성 사진을 촬영하러 포토그래퍼 분들께서 사진 촬영하는 오는 곳으로도
          유명합니다.
        </p>
        <div className='h-3' />
        <p className='my-3'>
          그리고 이곳에는 현지 주민들이 삶을 엿볼 수 있는 장소를 소개합니다.
        </p>
        <div className='flex flex-wrap space-x-3 space-y-4 mt-20 justify-between'>
          <div>
            <Image
              src={ImageSrc1}
              alt='고개서동_공유주방'
              width={450}
              height={400}
              objectFit={'cover'}
              placeholder='blur'
            />
            <h2 className='text-lg font-medium my-6'>서동미로시장</h2>
            <p className='my-3'>서동의 오래된 전통시장입니다. </p>
            <p className='my-3'>서동고개 사람들이 생계를 유지하는데 </p>
            <p className='my-3'>큰 힘이 된 곳입니다.</p>
            <p className='my-3'>이름이 왜 미로 시장인지는 직접 들어가 보시면</p>
            <p className='my-3'>공감하실겁니다</p>
            <div className='h-3' />
            <p className='my-3'>특유의 정겹고 즐거움이 넘치는 시장입니다.</p>
            <p className='my-3'>
              서동의자랑 &apos;맛나분식&apos;이자리잡고있으니,꼭
            </p>
            <p className='my-3'>한번 맛보세요.</p>
            <div className='h-3' />
            <p className='my-3'>맛집과, 먹을거리, 볼거리 가득한 공간입니다.</p>
          </div>
          <div>
            <Image
              src={ImageSrc2}
              alt='고개서동_공유주방'
              width={450}
              height={400}
              objectFit={'cover'}
              placeholder='blur'
            />
            <h2 className='text-lg font-medium my-6'>
              서동고개 스냅샷 찍기 좋은 곳
            </h2>
            <p className='my-3'>서동의 골목길은 어디서든 볼수없는 주택이 </p>
            <p className='my-3'>밀집되어 있습니다.</p>
            <div className='h-3' />
            <p className='my-3'>우스갯소리로 어릴땐, 여기가 세계인구 1위다,</p>
            <p className='my-3'>기네스에 올랐다~</p>
            <p className='my-3'>했던 기억이 납니다.</p>
            <div className='h-3' />
            <p className='my-3'>그만큼 특이한 가옥 구조들이 많습니다.</p>
            <div className='h-3' />
            <p className='my-3'>
              이곳의 감성을 담아 스냅샷 촬영하는 건 어떨까요?
            </p>
          </div>
        </div>
      </ContentContainer>
    </>
  );
};

export default Localplace;
