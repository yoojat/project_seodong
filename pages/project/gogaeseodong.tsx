import ContentContainer from '@components/Project/ContentContainer';
import { SmallTitle } from '@components/Project/SmallTitle';
import TopImage from '@components/Project/TopImage';
import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import TopSrcImage from '../../public/project/gogaeseodong/12.png';
import KitchenImgSrc from '../../public/project/gogaeseodong/9.jpeg';
import MovieImgSrc from '../../public/project/gogaeseodong/13.jpeg';
import StudioImgSrc from '../../public/project/gogaeseodong/8.jpeg';
import PartyRoomImgSrc from '../../public/project/gogaeseodong/11.jpeg';

const Gogaeseodong: NextPage = () => {
  return (
    <>
      <TopImage
        src={TopSrcImage}
        alt={'The Project SEO DONG'}
        innerText={'The Project SEO DONG'}
      />
      <ContentContainer>
        <SmallTitle>고개서동_프로젝트</SmallTitle>
        <p>#쓸모없는 공간은 없다. #로컬 업사이클링</p>
        <p>#지속가능한 #로컬자원 활용</p>
        <div className='h-3' />
        <p className='mt-12 mb-1'>서동 프로젝트는,</p>
        <p className='my-4'>서동 지역의 활용가능한 자원들을 통해,</p>
        <p className='my-4'>
          멈춰진 동네에 사람들의 발길이 닿도록 하는 것을 목표로 하고있습니다.
        </p>
        <div className='h-3' />

        <p className='my-4'>또한, </p>
        <p className='my-4'>로컬 자원을 활용하여,</p>
        <p className='my-4'>쇠퇴되어가고 있는 지역 생태계에,</p>
        <p className='my-4'>조금이라도 보탬이 되는 것을 소망합니다.</p>

        <div className='mt-5 w-full border-b-2' />
        <div className='mt-5 text-center text-lg'>
          <h3 className='mb-8'>
            주요 프로젝트 (사진 클릭시 해당 프로젝트로 이동)
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>
            <Link href='/localspace/sharedkitchen'>
              <a>
                <Image
                  src={KitchenImgSrc}
                  alt='서동 부엌'
                  width={300}
                  height={200}
                  objectFit='contain'
                  placeholder='blur'
                />
                <div className='mt-2 mb-10'>서동 부엌</div>
              </a>
            </Link>
            <Link href='/locallife/class'>
              <a>
                <Image
                  src={MovieImgSrc}
                  alt='서동영화'
                  width={300}
                  height={200}
                  objectFit='contain'
                  placeholder='blur'
                />
                <div className='mt-2 mb-10'>서동 영화</div>
              </a>
            </Link>
            <Link href='/localspace/ministudio'>
              <a>
                <Image
                  src={StudioImgSrc}
                  alt='스튜디오'
                  width={300}
                  height={200}
                  objectFit='contain'
                  placeholder='blur'
                />
                <div className='mt-2 mb-10'>작은 사진관</div>
              </a>
            </Link>
            <Link href='/localspace/partyroomandstudio'>
              <a>
                <Image
                  src={PartyRoomImgSrc}
                  alt='파티룸'
                  width={300}
                  height={200}
                  objectFit='contain'
                  placeholder='blur'
                />
                <div className='mt-2 mb-10'>리테일 컨텐츠</div>
              </a>
            </Link>
          </div>
        </div>
      </ContentContainer>
    </>
  );
};

export default Gogaeseodong;
