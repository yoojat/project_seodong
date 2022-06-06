import ContentContainer from '@components/Project/ContentContainer';
import TopImage from '@components/Project/TopImage';
import type { NextPage } from 'next';

const Localspace: NextPage = () => {
  return (
    <>
      <TopImage
        src={'/localspace/1.jpg'}
        alt={'서동 고개 메인 이미지'}
        innerText={''}
      />
      <ContentContainer>
        <p className='my-1'>
          우리가 태어나고 자란 이 동네 서동고개가 다시금 활기를 되찾길 바랍니다.
        </p>
        <p className='my-1'>
          제가 태어나고 자란 이곳은 서동고개에 자리잡은 낡고 오래된 4층
          건물입니다.
        </p>
        <p className='my-1'>
          온 가족들과 이웃사촌이 한데 모여, 울고 웃고 떠들며, 시끌벅적했던 이
          자리가 그리웠습니다.
        </p>
        <p className='my-1'>
          이제는 아무도 찾지 않는 버려진 공간이지만, 이곳에서의 오붓한 시간들이
          추억으로 이어지길 바랍니다.
        </p>

        <div className='mt-5 w-full border-b-2' />

        <p className='my-1'>
          사람들이 찾는 공간의 힘은 정말이지 대단하다는 걸 느꼈습니다.
        </p>
        <p className='my-1'>
          공간이 갖춰진 곳에 한 사람 한 사람의 사소한 인연이 이어지는 것으로
          시작해,
        </p>
        <p className='my-1'>그 모임이 커지고 활성화된다면</p>
        <p className='my-1'>
          &quot;침체된 마을을 다시금 활기를 불어넣을 수 있지 않을까요?&quot;
          라는 즐거운 상상을 해봅니다.
        </p>

        <p className='my-1'>
          그리고 그 생각 끝에서 공간_고개서동은 시작하였습니다.
        </p>
        <p className='my-1'>공간 고개서동은 쓸모없는 공간은 없다. </p>

        <p className='my-1'>모든 공간은 추억과 이야기가 있다는 마음으로 </p>

        <p className='my-1'>
          아무도 바라보지 않는 오래된 집을 재가공, 시공함으로써{' '}
        </p>
        <p className='my-1'>사람을 찾게 만드는 공간 업사이클링 입니다. </p>
        <p className='my-1'>1층_공유주방 (운영중) </p>
        <p className='my-1'>2층_파티룸 과 스튜디오 (운영중) </p>
        <p className='my-1'>3층_ 서재 (예정) </p>
        <p className='my-1'>4층_ 민박집 (예정) </p>
        <p className='my-1'>5층_ 옥상정원 (예정)</p>
        <p className='my-1'>이뤄질 예정입니다.</p>
      </ContentContainer>
    </>
  );
};

export default Localspace;
