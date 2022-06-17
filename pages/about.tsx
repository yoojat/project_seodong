import ContentContainer from '@components/Project/ContentContainer';
import TopImage from '@components/Project/TopImage';
import type { NextPage } from 'next';
import tw from 'tailwind-styled-components';

const CotentBackContainer = tw.div`
  text-slate-700
  font-medium
  text-md
`;

const Home: NextPage = () => {
  return (
    <>
      <div></div>
      <TopImage
        src={'/about/1.jpg'}
        alt={'서동 이미지'}
        innerText={'시작하며'}
      />
      <ContentContainer>
        <CotentBackContainer>
          <p className='my-4'>
            지금으로부터 약 30년 전 서동고개는 희노애락이 있는 곳이었습니다.
          </p>
          <p className='my-4'>
            서동 고개에서 태어나고, 자라며 그때는 당연했던 것들이 지금은
            사라졌습니다.
          </p>
          <p className='my-4'>서동고개는 많이 변했습니다.</p>
          <p className='my-4'>
            대부분의 사람이 떠나갔고, 남은 것은 그들의 빈 공간뿐입니다.
          </p>
          <p className='my-4'>그 빈자리를 채우려 많은 시도가 있어왔습니다. </p>
          <p className='my-4'>
            하지만, 여전히 이 서동고개는 정성과 관심이 필요합니다.
          </p>
          <p className='my-4'>
            그래서 정성과 관심을 담은 공간을 만들어 보려 합니다.
          </p>
          <p className='my-4'>시작할께요 </p>
          <p className='my-4'>
            외롭지 않았던 어릴시절의 서동고개를 다시 재현하기 위해.
          </p>
        </CotentBackContainer>
      </ContentContainer>
    </>
  );
};

export default Home;
