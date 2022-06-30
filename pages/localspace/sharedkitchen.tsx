import ContentContainer from '@components/Project/ContentContainer';
import type { NextPage } from 'next';
import SimpleImageSlider from 'react-simple-image-slider';

const images = [
  { url: '/localspace/sharedkitchen/slideImgs/8.jpeg' },
  { url: '/localspace/sharedkitchen/slideImgs/2.jpeg' },
  { url: '/localspace/sharedkitchen/slideImgs/3.jpeg' },
  { url: '/localspace/sharedkitchen/slideImgs/5.jpeg' },
  { url: '/localspace/sharedkitchen/slideImgs/6.jpeg' },
  { url: '/localspace/sharedkitchen/slideImgs/7.jpeg' },
  { url: '/localspace/sharedkitchen/slideImgs/1.jpeg' },
];

const SharedKitchen: NextPage = () => {
  return (
    <>
      <ContentContainer>
        <h2 className='text-lg font-medium my-6'>공유주방_서동부엌</h2>
        <p className='my-4'>
          공유주방 서동부엌은 서동 프로젝트의 첫번째 미션이었습니다.
        </p>
        <p className='my-4'>시간과 자금이 부족했던 터라,</p>
        <p className='my-4'>여유가 생길때마다 하나씩 만들어 나갔는데요..</p>
        <div className='h-3' />
        <p className='my-4'>수개월의 시간이 흘렀고,</p>
        <p className='my-4'>
          주간 문의 건수 130회, 주간 평균 20여명 이상(6월 기준)
        </p>
        <p className='my-4'>이용하는 공유주방으로 활성화 되어지고 있습니다.</p>
        <div className='h-3' />
        <p className='my-4'>사랑하는 사람들과 한끼 식사를 해먹으며,</p>
        <p className='my-4'>즐거운 시간을 보내기 좋은 공간입니다.</p>
        <div className='h-3' />
        <p className='my-4'>
          또한, 제과 제빵, 원데이 클래스, 요리 동아리, 음식 스튜디오 공간 등으로
          활용되어지고 있습니다.
        </p>
        <div className='flex flex-wrap space-x-3 mt-20 justify-between'>
          <div>
            <SimpleImageSlider
              width={350}
              height={350}
              images={images}
              showBullets={true}
              showNavs={true}
              autoPlay={true}
            />

            <p className='my-4 mt-16'>[시설, 설비]</p>
            <p className='my-4'>-기본조리, 베이킹 도구 (예약 페이지 참고)</p>
            <p className='my-4'>-냉장고, 냉난방기, 블루투스 스피커</p>
            <p className='my-4'>-내부 화장실</p>
          </div>
          <div>
            <p className='my-4'>[운영 안내]</p>
            <p className='my-4'>위치 : 부산 금정구 서동로 91번길 7. 1층</p>
            <p className='my-4'>운영시간 : 08시 ~ 24시 (연중무휴)</p>
            <div className='h-3' />
            <div className='h-3' />
            <p className='my-4'>[이용 안내]</p>
            <p className='my-4'>
              - 이용 예약 확인 후, 문자로 비밀번호 등을 안내해 드립니다.
            </p>
            <p className='my-4'>
              - 주차 : &apos;서동 제2공영주차장&apos;에 주차 후, 도보 3분
              거리(차량 1대 지원)
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
            href='http://naver.me/FABzPF4p'
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

export default SharedKitchen;
