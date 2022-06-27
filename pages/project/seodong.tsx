import ContentContainer from '@components/Project/ContentContainer';
import { SmallTitle } from '@components/Project/SmallTitle';
import TopImage from '@components/Project/TopImage';
import type { NextPage } from 'next';

const Seodong: NextPage = () => {
  return (
    <>
      <TopImage
        src={'/project/seodong/1.jpg'}
        alt={'가깝지만 먼 동네'}
        innerText={'가깝지만 먼 동네'}
      />
      <ContentContainer>
        <p className='my-4'>
          서동은 부산 금정구에 위치해 있는 오래된 동네입니다.
        </p>
        <p className='my-4'>
          온천장역에서 내려, 버스를 타고 서동고개를 넘게되면, 우리는 이곳을
          서동이라 불러왔습니다.
        </p>
        <p className='my-4'>
          과거에는, 동상동이라 불러왔지만, 영도의 동삼동과 비슷하다는 이유로
          동네의 이름이 바뀌었다더군요.
        </p>
        <SmallTitle className=''>서동은 사연이 많은 동네입니다.</SmallTitle>
        <p className='my-4'>
          1960년대, 영주동과 충무동 판자촌에서 살고있던 철거민들이 이주하며,
          이곳에 자리하게 되었습니다.
        </p>
        <p className='my-4'>
          인근에 위치해있던 금사공단의 발달은, 노동자들을 이 동네로 이주시켰고,
          그로인해 많은 사람들로 붐비는 동네가 되었습니다.
        </p>
        <p className='my-4'>
          서동시장에는 먼 곳에서도 장을 보러 오는 손님들과 이를 맞이하는
          상인들로 항상 분주했습니다.
        </p>
        <p className='my-4'>하지만,</p>
        <p className='my-4'>좁은 동네에 많은 집들이 옹기종기 모여진 터라,</p>
        <p className='my-4'>
          열악한 주거환경과 주변 시설들은 열악하기 짝이 없었죠.
        </p>
        <p className='my-4'>
          뿐만 아니라, 금사공단의 몰락은 더이상 일자리를 찾아 이 동네로 올
          이유조차 사라지게 되었습니다.
        </p>
        <p className='my-4'>결국, 사람들은 동네를 떠나게 되었습니다.</p>
        <SmallTitle className='text-xl font-medium my-6 underline underline-offset-4'>
          서동에는 오래된 가옥들이 그대로 남겨져 있습니다.
        </SmallTitle>
        <p className='my-4'>
          고층 빌딩과 아파트로 형성된 도심에서는 볼 수 없는 독채 건물이
          수두룩하며,
        </p>
        <p className='my-4'>
          골목을 오르락내리락 하다 보면, 옛 건물들이 그대로 남아있습니다.
        </p>
        <div className='h-3' />
        <p className='my-4'>
          하나의 전봇대에 도무지 어느 집으로 이어져있는지도 모르는 수십개의
          전선들
        </p>
        <p className='my-4'>
          사람들의 발걸음이 적어, 다 꺼져가는 가로수 등불의 골목길
        </p>
        <div className='h-3' />
        <p className='my-4'>
          폐가라 해도 믿을법한 오래된 집들로 볼수도 있지만,
        </p>
        <p className='my-4'>
          한편으론, 부산의 70~80년대 추억을 그대로 간직한 곳이기도 합니다.
        </p>
      </ContentContainer>
    </>
  );
};

export default Seodong;
