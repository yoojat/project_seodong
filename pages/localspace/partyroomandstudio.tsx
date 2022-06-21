import ContentContainer from '@components/Project/ContentContainer';
import TopImage from '@components/Project/TopImage';
import type { NextPage } from 'next';
import Image from 'next/image';

const Partyroomandstudio: NextPage = () => {
  return (
    <>
      <ContentContainer>
        <h2 className='text-lg font-medium my-6'>
          그리고, 서동 프로젝트의 두번째 공간,
        </h2>
        <p className='my-1'>
          오티티 프라이빗 영화관 &apos;서동영화&apos;를 완성하였습니다.
        </p>
        <p className='my-1'>
          젊은계층의 이용자들이 프라이빗하게 플레이 할 수 있는 공간이 부족하다는
          생각에 이 공간을 기획하게 되었습니다.
        </p>
        <p className='my-1'>
          현재 넷플릭스 영화나 스포츠 중계를 보기위해 이용하는 방문자들이
          늘어나고 있습니다.
        </p>
        <div className='h-3' />
        <p className='my-1'>뿐만 아니라,</p>
        <p className='my-1'>
          지역 상인분들과 함께, 로컬 브랜드를 만드는 일에도 힘을 쏟고 있는데요.
        </p>
        <p className='my-1'>
          &apos;진짜한우육회&apos;라는 요식업 브랜드를 런칭하여,
        </p>
        <div className='h-3' />
        <p className='my-1'>아직은 많이 부족하지만,</p>
        <p className='my-1'>
          지역사회에 조금이나마 보탬이 되기위해 노력하겠습니다.
        </p>
        <p className='my-1'>많은 분들의 관심과 동참 부탁드립니다.</p>

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
