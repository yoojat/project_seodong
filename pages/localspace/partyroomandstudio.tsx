import ContentContainer from '@components/Project/ContentContainer';
import TopImage from '@components/Project/TopImage';
import type { NextPage } from 'next';
import Image from 'next/image';

const Partyroomandstudio: NextPage = () => {
  return (
    <>
      <ContentContainer>
        <h2 className='text-lg font-medium my-6'>
          고개서동_ 파티룸 & 스튜디오
        </h2>
        <p className='my-1'>
          꼭 시끄럽고 복잡하고 사람 가득한 시내에 파티룸만 가야 하나요?
        </p>
        <p className='my-1'>
          왜 꼭 대기가 너무 많아 두 달 전 부터 예약을 해둬야할까요?
        </p>
        <p className='my-1'>
          이곳은 여유와 낭만이 있는 골목에 위치한 고개서동 파티룸입니다.
        </p>
        <div className='h-3' />
        <p className='my-1'>
          고개서동 파티룸은 파티룸, 셀프 스튜디오, 빈티지 거실로 이루어져
          있습니다.
        </p>
        <p className='my-1'>
          모든 공간을 한 번에 한 팀만 이용 가능한 프라이빗 파티룸 입니다.
        </p>

        <div className='h-3' />
        <p className='my-1'>
          파티도 즐기고 친구, 연인과 함께 셀프 사진촬영까지 이용 가능합니다.
        </p>
        <div className='h-3' />
        <p className='my-1'>
          맛있는 음식도 먹고, 와인한잔 하면서 즐거운 파티를 보내세요.
        </p>
        <div className='h-3' />

        <p className='my-1'>
          이곳은 여러분을 위해 만들어진, 공간입니다. 사랑하는 이들과 함께 서로를
          축하하며, 추억을 남기세요.
        </p>

        <div className='flex flex-wrap space-x-3 mt-20 justify-between'>
          <div>
            <Image
              src='/localspace/partyroomandstudio/1.jpg'
              alt='고개서동_공유주방'
              width={500}
              height={350}
              objectFit={'cover'}
            />
            <p className='my-1 mt-5'>[시설, 설비]</p>
            <p className='my-1'>-기본조리, 베이킹 도구 (예약 페이지 참고)</p>
            <p className='my-1'>-냉장고, 냉난방기, 블루투스 스피커</p>
            <p className='my-1'>-각종파티용품, 빔프로젝터</p>
            <p className='my-1'>-스튜디오 조명, 삼각대</p>
            <p className='my-1'>-내부 화장실</p>
          </div>
          <div>
            <p className='my-1'>[운영 안내]</p>
            <p className='my-1'>위치 : 부산 금정구 서동로 91번길 7. 2층</p>
            <p className='my-1'>운영시간 : 08시 ~ 24시 (연중무휴)</p>
            <div className='h-3' />
            <div className='h-3' />
            <p className='my-1'>[이용 안내]</p>
            <div className='h-3' />
            <p className='my-1'>: 모든 요금은 1시간당 요금</p>
            <p className='my-1'>: 최소3시간이상예약</p>
            <p className='my-1'>: 4인기준금액</p>
            <p className='my-1'>: 1인추가시10,000원</p>
            <div className='h-3' />
            <p className='my-1'>- 평일 (월~목)</p>
            <p className='my-1'>20,000원 -&gt; 15,000원 (할인가)</p>
            <div className='h-3' />
            <p className='my-1'>- 주말 (금~일)</p>
            <p className='my-1'>30,000원 -&gt; 25,000원 (할인가)</p>
            <div className='h-3' /> <div className='h-3' />
            <p className='my-1'>•·베이킹 도구를 사용할 경우</p>
            <p className='my-1'>* 이벤트는 선착순 50명</p>
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

export default Partyroomandstudio;
