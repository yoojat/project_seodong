import ContentContainer from '@components/Project/ContentContainer';
import type { NextPage } from 'next';
import Image from 'next/image';
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

const MiniLibrary: NextPage = () => {
  return (
    <>
      <ContentContainer>
        <h2 className='text-lg font-medium my-6'>
          일하고 싶은 혼자만의 공간_작은 서재
        </h2>
        <p className='my-4'>소박한 바램 중 하나가 있다면,</p>
        <p className='my-4'>일하고 싶은 공간을 가지는 것이었습니다.</p>
        <p className='my-4'>실증을 잘 내는 성격 탓에,</p>
        <p className='my-4'>
          한 공간에서 꾸준히 일하는 것은 참 힘든 일이었습니다.
        </p>

        <div className='h-3' />
        <p className='my-4'>
          차라리 일하고 싶은 공간이 떠오를때마다, 직접 만들어 봐야겠다는 생각을
          가지게 되었죠.
        </p>
        <div className='h-3' />
        <p className='my-4'>가끔 새로운 전환점이 필요하거나,</p>
        <p className='my-4'>새로운 환경에서의 영감을 필요로 하시는 분들.</p>
        <p className='my-4'>
          특별한 인사이트나 경험을 공유하고 싶을때, 이 곳을 이용해 주세요.
        </p>
        <p className='my-4'>
          ※ 혹은, 저랑 다양한 이야기를 나누고 싶으시다면, 이곳을 방문해 주세요!
        </p>

        <div className='flex flex-wrap space-x-3 mt-20 justify-between'>
          <div>
            <Image
              src='/localspace/minilibrary/1.jpeg'
              alt='진짜 독서실'
              width={500}
              height={350}
              objectFit={'cover'}
            />
            <p className='my-4'>[시설, 설비]</p>
            <p className='my-4'>
              - 의자, 책상, 모니터, 복합기, 가습기, 커피포트, 블루투스 스피커,
              스마트폰 충전기 등
            </p>
            <p className='my-4'>- 맛있는 드랍커피, 녹차 등</p>
            <p className='my-4'>- 내부 화장실</p>
          </div>
          <div>
            <p className='my-4'>[운영 안내]</p>
            <p className='my-4'>위치 : 부산 금정구 서동로 91번길 7. 3층</p>
            <p className='my-4'>운영시간 : 08시 ~ 24시 (연중무휴)</p>
            <div className='h-3' />
            <div className='h-3' />
            <p className='my-4'>[이용 안내]</p>
            <p className='my-4'>
              - 여러명이 함께 이용 할 수 있는 점 인지해주시기 바랍니다.
            </p>
            <p className='my-4'>
              - 이용 예약 확인 후, 문자로 비밀번호 등을 안내해 드립니다.
            </p>
            <p className='my-4'>
              - 주차 : &apos;서동 제2공영주차장&apos;에 주차 후, 도보 3분
              거리(차량 1대 지원)
            </p>
          </div>
        </div>
      </ContentContainer>
    </>
  );
};

export default MiniLibrary;
