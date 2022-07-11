import ContentContainer from '@components/Project/ContentContainer';
import TopImage from '@components/Project/TopImage';
import type { NextPage } from 'next';
import tw from 'tailwind-styled-components';
import mainImage from '../public/project/gogaeseodong/1.jpg';

const CotentBackContainer = tw.div`
  text-slate-700
  font-medium
  text-md
`;

const Home: NextPage = () => {
  return (
    <>
      <div></div>
      <TopImage src={mainImage} alt={'서동 이미지'} innerText={'시작하며'} />
      <ContentContainer>
        <CotentBackContainer>
          <p className='my-4'>
            30여년전, 이 동네의 추억을 끄집어보면, 이런 단어들이 떠오릅니다.
          </p>
          <p className='my-4'>옹기종기, 시끌벅쩍, 티격태격.</p>
          <p className='my-4'>
            엄마가 하던 농심가슈퍼는 이 동네의 모임공간이나 다름없었습니다.
          </p>
          <p className='my-4'>
            동네 할머니들의 노인정이었고, 동네 아줌마들의 대화창구였고,
          </p>
          <p className='my-4'>노가다꾼 아저씨들의 소주방 같은 곳이었죠.</p>
          <p className='my-4'>
            그때는 이 동네가 정말 싫었습니다. 하루라도 이 지긋지긋한 동네를
            떠나고 싶었죠.
          </p>
          <p className='my-4'>그런데 30년이 지난 지금,</p>
          <p className='my-4'>
            그 싫었던 순간들도, 다시 볼수 없다는 생각에 그리움으로 남더라구요.
          </p>
          <p className='my-4'>
            이 동네는 여전히 그자리에 있지만, 사람들은 하나둘 떠나더라구요.
          </p>

          <p className='my-4'>
            사람들의 발걸음을 돌리기위해, 많은 시도를 해왔지만, 여전히 이
            동네에는 관심이 필요합니다.
          </p>
          <p className='my-4'>
            많은 사람들의 노력과 정성을 담은 동네로 이어졌으면 합니다.
          </p>
          <p className='my-4'>
            오늘도 하루를 시작하며, 외롭지 않았던 서동을 추억해 봅니다.
          </p>
        </CotentBackContainer>
      </ContentContainer>
    </>
  );
};

export default Home;
