import ContentContainer from '@components/Project/ContentContainer';
import TopImage from '@components/Project/TopImage';
import type { NextPage } from 'next';

const Locallife: NextPage = () => {
  return (
    <>
      <TopImage
        src={'/locallife/cookingclass/8.jpeg'}
        alt={'서동 고개 메인 이미지'}
        innerText={'콘텐츠 스토리'}
      />
      <ContentContainer>
        <p className='my-3'>서동의 공간과 자원을 활용하여,</p>
        <p className='my-3'>
          사람들에게 선한 영향력과 가치를 심어 주기위해 노력합니다.
        </p>
        <p className='my-3'>허무맹랑하고 이상적인 생각들로 가득하겠지만,</p>
        <p className='my-3'>
          이 또한 우리의 생각과 가치를 이루기 위한 과정의 일환이라 생각합니다.
        </p>
        <div className='h-3' />
        <p className='my-3'>항상 열린 자세로,</p>
        <p className='my-3'>
          사람과 로컬자원을 활용한 컨텐츠를 고민하고 실행하겠습니다.
        </p>
        <p className='my-3'>다양한 의견과 아이디어를 제시해 주신다면,</p>
        <p className='my-3'>
          헛되지 않게 수렴하며, 한층 더 성장하기 위해 노력하겠습니다.
        </p>
      </ContentContainer>
    </>
  );
};

export default Locallife;
