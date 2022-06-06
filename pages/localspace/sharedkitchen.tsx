import ContentContainer from '@components/Project/ContentContainer';
import TopImage from '@components/Project/TopImage';
import type { NextPage } from 'next';
import Image from 'next/image';

const SharedKitchen: NextPage = () => {
  return (
    <>
      <ContentContainer>
        <h2 className='text-lg font-medium my-6'>고개서동_공유주방</h2>
        <p className='my-1'>이 공간은 </p>
        <p className='my-1'>
          공유주방, 모임공간, 베이킹공간, 회의공간으로도 손색이없는 곳입니다.
        </p>
        <p className='my-1'>사랑하는 사람을 초대해 함께 요리를 해먹거나,</p>
        <p className='my-1'>
          베이킹 도구를 이용해 아이들과 함께 제빵을 하면서 즐거운 시간을 보내도
          됩니다.
        </p>
        <p className='my-1'>
          제빵, 요리 원 데이 클래스를 진행하는데 공간이 없는 분들이 이용하기에는
          더없이 딱 알맞은 곳입니다.
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
            <p className='my-1 mt-5'>[시설, 설비]</p>
            <p className='my-1'>-기본조리, 베이킹 도구 (예약 페이지 참고)</p>
            <p className='my-1'>-냉장고, 냉난방기, 블루투스 스피커</p>
            <p className='my-1'>-내부 화장실</p>
          </div>
          <div>
            <p className='my-1'>[운영 안내]</p>
            <p className='my-1'>위치 : 부산 금정구 서동로 91번길 7. 1층</p>
            <p className='my-1'>운영시간 : 08시 ~ 24시 (연중무휴)</p>
            <div className='h-3' />
            <div className='h-3' />
            <p className='my-1'>[이용 안내]</p>
            <p className='my-1'>
              •·이용 예약 확인 후, 문자로 비밀번호 등을 안내해 드립니다.
            </p>
            <p className='my-1'>•·매일 08:00 ~ 24:00(최소 3시간 이용 가능)</p>
            <p className='my-1'>
              •·부산 금정구 서동로 91번길 7, 1층 - 인근 공영 주차장과 갓길
              주차가 가능합니다.
            </p>
            <div className='h-3' />
            <p className='my-1'>•·베이킹 도구를 사용하지 않을 경우</p>
            <p className='my-1'>•평일(월~목) 1시간 - 12,000원(2인 기준)</p>
            <p className='my-1'>
              •주말(금~일), 공휴일 1시간 - 15,000원(2인 기준)
            </p>
            <p className='my-1'>• 인원 추가 시간 상관없이 1인 8,000원</p>
            <div className='h-3' /> <div className='h-3' />
            <p className='my-1'>•·베이킹 도구를 사용할 경우</p>
            <p className='my-1'>•평일(월~목) 1시간 - 16,000원(2인 기준)</p>
            <p className='my-1'>
              •주말(금~일), 공휴일 1시간 - 19,000원(2인 기준)
            </p>
            <p className='my-1'>* 인원 추가 시간 상관없이 1인 12,000원</p>
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
