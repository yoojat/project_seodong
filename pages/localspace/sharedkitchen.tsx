import ContentContainer from '@components/Project/ContentContainer';
import TopImage from '@components/Project/TopImage';
import type { NextPage } from 'next';
import Image from 'next/image';

const SharedKitchen: NextPage = () => {
  return (
    <>
      <ContentContainer>
        <h2 className='text-lg font-medium my-6'>고개서동_공유주방</h2>
        <p className='my-4'>첫 시작은,</p>
        <p className='my-4'>
          &apos;고개서동&apos; 건물을 활용하여, 공유주방 서동부엌을
          오픈하였습니다.
        </p>
        <p className='my-4'>시간과 자금이 부족했던 터라,</p>
        <p className='my-4'>여유가 생길때마다 하나씩 만들어 나갔는데요..</p>
        <div className='h-3' />
        <p className='my-4'>그렇게 수개월의 시간이 흘렀고,</p>
        <p className='my-4'>
          주간 문의 건수 130회, 주간 평균 20여명 이상(6월 기준)
        </p>

        <div className='flex flex-wrap space-x-3 mt-20 justify-between'>
          <div>
            <Image
              src='/localspace/sharedkitchen/1.png'
              alt='고개서동_공유주방'
              width={500}
              height={350}
              objectFit={'cover'}
            />
            <p className='my-4 mt-5'>[시설, 설비]</p>
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
              •·이용 예약 확인 후, 문자로 비밀번호 등을 안내해 드립니다.
            </p>
            <p className='my-4'>•·매일 08:00 ~ 24:00(최소 3시간 이용 가능)</p>
            <p className='my-4'>
              •·부산 금정구 서동로 91번길 7, 1층 - 인근 공영 주차장과 갓길
              주차가 가능합니다.
            </p>
            <div className='h-3' />
            <p className='my-4'>•·베이킹 도구를 사용하지 않을 경우</p>
            <p className='my-4'>•평일(월~목) 1시간 - 12,000원(2인 기준)</p>
            <p className='my-4'>
              •주말(금~일), 공휴일 1시간 - 15,000원(2인 기준)
            </p>
            <p className='my-4'>• 인원 추가 시간 상관없이 1인 8,000원</p>
            <div className='h-3' /> <div className='h-3' />
            <p className='my-4'>•·베이킹 도구를 사용할 경우</p>
            <p className='my-4'>•평일(월~목) 1시간 - 16,000원(2인 기준)</p>
            <p className='my-4'>
              •주말(금~일), 공휴일 1시간 - 19,000원(2인 기준)
            </p>
            <p className='my-4'>* 인원 추가 시간 상관없이 1인 12,000원</p>
          </div>
        </div>
        <div className='text-center mt-20'>
          <a
            target='_blank'
            href='https://pf.kakao.com/_VCxnsb/chat'
            rel='noreferrer'
            className='bg-yellow-400 text-yellow-900 border-none font-extrabold cursor-pointer hover:opacity-80 m-3 w-40 inline-block p-3 text-center'
          >
            카카오 문의
          </a>
          <a
            target='_blank'
            href='https://m.booking.naver.com/booking/10/bizes/638724?theme=place&entry=pll&area=pll'
            rel='noreferrer'
            className='bg-green-600 text-white border-none font-extrabold cursor-pointer hover:opacity-80 m-3 w-40 inline-block p-3 text-center'
          >
            네이버 예약
          </a>
        </div>
      </ContentContainer>
    </>
  );
};

export default SharedKitchen;
