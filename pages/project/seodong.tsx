import ContentContainer from '@components/Project/ContentContainer';
import TopImage from '@components/Project/TopImage';
import type { NextPage } from 'next';

const Seodong: NextPage = () => {
  return (
    <>
      <TopImage
        src={'/project/seodong/1.jpg'}
        alt={'서동 고개 메인 이미지'}
        innerText={'서동고개'}
      />
      <ContentContainer>
        <p className='my-1'>
          서동고개는 부산시 금정구 서동에 위치한 고개에 자리 잡은 주거지입니다.
        </p>
        <p className='my-1'>
          지하철 온천장역, 서동역에서 각각 도보로 15분 정도 걸어 올라와야 하는
          고생스러운 곳에 있는 곳입니다.
        </p>
        <p className='my-1'>
          고개까지 올라오면 부산의 경치가 제법 보이는 아름다운 곳입니다.
        </p>

        <h2 className='text-lg font-medium my-6'>
          서동고개는 사연이 많은 동네입니다.
        </h2>

        <p className='my-1'>
          1968년에 영주동과 충무동 판자촌에서 온 철거민들이 이주하여 조성이 된
          곳입니다.
        </p>
        <p className='my-1'>
          국가정책으로 옮겨진 이주민들이 토착화되면서 인구가 증가하면서 동시에
          활기가 넘쳤던 동네였습니다.
        </p>
        <p className='my-1'>
          서동시장이 함께 위치해, 먼 곳에서도 장 보러 오는 손님맞이를 위해
          장사꾼이 많았습니다.
        </p>
        <p className='my-1'>하지만, 국가정책으로 인하여</p>
        <div className='h-3' />
        <p className='my-1'>
          좁은 고개에 토착민과, 이주민이 함께 살았던 것부터 시작해서
        </p>
        <p className='my-1'>
          좁은 동네에 집을 짓기 시작하면서 생긴 많은 불편함과 발전의 한계
        </p>
        <p className='my-1'>
          노후화되어도 진전 없는 도시재생으로 많은 젊은이들이 떠나갔습니다.
        </p>
        <div className='h-3' />
        <p className='my-1'>
          그리고 남겨진 장사꾼과 고향을 떠나지 못하는 사람들
        </p>
        <p className='my-1'>그 과정에서 수많은 사연을 겪은 곳입니다. </p>
        <p className='my-1'>
          왠지 모르게, 이 동네에 있으면 남아있는 분들의 마음을 알 것 같습니다.
        </p>
        <h2 className='text-lg font-medium my-6'>
          서동고개는 도시에서 볼 수 없는 추억이 있습니다.
        </h2>
        <p className='my-1'>
          서동고개에는 1960~1970년에 지어진 수많은 가옥들이 그대로 오밀조밀하게
          남겨져 있습니다.
        </p>
        <p className='my-1'>지금은 흔히 볼 수 없는 독채 건물이 수두룩하며,</p>
        <p className='my-1'>
          골목을 오르락내리락 하다 보면, 옛날을 추억하는 건물들이 그대로
          남아있습니다.
        </p>
        <div className='h-3' />
        <p className='my-1'>
          하나의 전봇대에 도무지 어느 집으로 이어져있는지도 모르는 수십개의
          전선들
        </p>
        <p className='my-1'>다 꺼져가는 노란색 전구의 골목길 전등</p>
        <p className='my-1'>집집마다 오래된 나무 창문</p>
        <p className='my-1'>
          돌로 쌓아올린 벽, 부산의 70~80대년 추억을 그대로 간직한 곳입니다.
        </p>
      </ContentContainer>
    </>
  );
};

export default Seodong;
