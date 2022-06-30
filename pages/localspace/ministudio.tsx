import ContentContainer from '@components/Project/ContentContainer';
import type { NextPage } from 'next';
import SimpleImageSlider from 'react-simple-image-slider';

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

const SmallStudio: NextPage = () => {
  return (
    <>
      <ContentContainer>
        <h2 className='text-lg font-medium my-6'>작은 사진관</h2>
        <p className='my-4'>넓은 공간일 필요가 없었습니다.</p>
        <p className='my-4'>온전히 우리만의 공간에서,</p>
        <p className='my-4'>추억을 공유 할 사진 한장을 찍고 싶었습니다.</p>
        <div className='h-3' />
        <p className='my-4'>그렇게, 작은 사진관은 탄생하게 되었는데요.</p>
        <div className='h-3' />
        <p className='my-4'>
          사랑하는 연인, 친구들과 함께 편안하고 자유롭게 추억을 남겨보세요.
        </p>
        <div className='flex flex-wrap space-x-3 mt-20 justify-between'>
          <div className='max-w-sm'>
            <div className='relative w-full h-0 pb-[177%] overflow-hidden'>
              <SimpleImageSlider
                width='100%'
                height='100%'
                images={images}
                showBullets={true}
                showNavs={true}
                autoPlay={true}
              />
            </div>

            <p className='my-4 mt-16'>[시설, 설비]</p>
            <p className='my-4'>
              - 삼각대, 백색 조명, 만달라키 조며, 스튜디오 스툴 2개, 전신거울,
              셀카봉, 촬영 소품(머리띠, 모자등) 등
            </p>
            <p className='my-4'>- 내부 화장실</p>
          </div>
          <div>
            <p className='my-4'>[운영 안내]</p>
            <p className='my-4'>위치 : 부산 금정구 서동로 91번길 7. 2층</p>
            <p className='my-4'>운영시간 : 08시 ~ 24시 (연중무휴)</p>
            <div className='h-3' />
            <div className='h-3' />
            <p className='my-4'>[이용 안내]</p>
            <p className='my-4'>
              - 별도 예약없이, 고개서동 이용시, 함께 이용 가능하십니다.
            </p>
          </div>
        </div>
        <div className='text-center mt-20'>
          <a
            target='_blank'
            href='https://pf.kakao.com/_VCxnsb/chat'
            rel='noreferrer'
            className='border-amber-900 border-[1px] text-yellow-900 font-extrabold cursor-pointer m-3 w-40 inline-block p-3 text-center hover:bg-amber-900 hover:text-white transition-all'
          >
            문의
          </a>
          <a
            target='_blank'
            href='http://naver.me/5K8JpQTp'
            rel='noreferrer'
            className='border-amber-900 border-[1px] text-yellow-900 font-extrabold cursor-pointer m-3 w-40 inline-block p-3 text-center hover:bg-amber-900 hover:text-white transition-all'
          >
            예약
          </a>
        </div>
      </ContentContainer>
    </>
  );
};

export default SmallStudio;
