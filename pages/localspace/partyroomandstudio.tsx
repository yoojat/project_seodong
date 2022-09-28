import ContentContainer from '@components/Project/ContentContainer';
import type { NextPage } from 'next';
import SimpleImageSlider from 'react-simple-image-slider';

const images = [
  { url: '/localspace/movie/1.jpeg' },
  { url: '/localspace/movie/2.jpeg' },
  { url: '/localspace/movie/3.jpeg' },
  { url: '/localspace/movie/4.jpeg' },
  { url: '/localspace/movie/5.jpeg' },
  { url: '/localspace/movie/6.jpeg' },
  { url: '/localspace/movie/7.jpeg' },
  { url: '/localspace/movie/8.jpeg' },
  { url: '/localspace/movie/9.jpeg' },
  { url: '/localspace/movie/10.jpeg' },
  { url: '/localspace/movie/11.jpeg' },
];

const Partyroomandstudio: NextPage = () => {
  return (
    <>
      <ContentContainer>
        <h2 className='text-lg font-medium my-6'>
          그리고, 서동 프로젝트의 두번째 공간,
        </h2>
        <p className='my-4'>
          오티티 프라이빗 영화관 &apos;서동영화&apos;를 완성하였습니다.
        </p>
        <p className='my-4'>친구들과 어울려 놀 수 있는 공간이 참 없더라구요.</p>
        <p className='my-4'>
          영화 한편을 보며, 맥주 한캔 마시는 여유를 즐기고 싶었습니다.
        </p>
        <p className='my-4'>
          이런 작은 바램이 &apos;서동영화&apos;로 이어졌습니다.
        </p>
        <div className='h-3' />
        <p className='my-4'>넷플릭스, 티빙과 같이 OTT 영화,</p>
        <p className='my-4'>EPL, NBA와 같은 스포츠 중계,</p>
        <p className='my-4'>
          닌텐도 스위치와 같은 게임을 하기에 최적의 장소입니다.
        </p>
        <div className='h-3' />

        <p className='my-4'>
          최근에는, 실내 데이트 장소로 많은 커플들이 찾아오고 있습니다.
        </p>

        <div className='flex flex-wrap space-x-3 mt-20 justify-between'>
          <div>
            <div className='relative w-full h-0 pb-[75%] overflow-hidden'>
              <SimpleImageSlider
                width='100%'
                height='100%'
                images={images}
                showBullets={true}
                showNavs={true}
                autoPlay={true}
              />
            </div>
            <div>
              <p className='my-1 mt-5'>[시설, 설비]</p>
              <p className='my-4'>
                - 빔프로젝터, 스피커, 와인잔, 와인 거치대, 전자레인지, 커피포트,
                블루투스 스피커, 스마트폰 충전기 등
              </p>
              <p className='my-4'>- 기본 접시, 그릇, 커트러리 등</p>
              <p className='my-4'>- 각종파티용품, 빔프로젝터</p>
              <p className='my-4'>- 내부 화장실</p>
            </div>
          </div>
          <div className='relative'>
            <p className='my-4'>[운영 안내]</p>
            <p className='my-4'>위치 : 부산 금정구 서동로 91번길 7. 2층</p>
            <p className='my-4'>운영시간 : 08시 ~ 24시 (연중무휴)</p>
            <div className='h-3' />
            <div className='h-3' />
            <p className='my-4'>[이용 안내]</p>
            <div className='h-3' />
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

export default Partyroomandstudio;
