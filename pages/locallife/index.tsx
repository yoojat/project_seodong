import ContentContainer from '@components/Project/ContentContainer';
import TopImage from '@components/Project/TopImage';
import type { NextPage } from 'next';

const Locallife: NextPage = () => {
  return (
    <>
      <TopImage
        src={'/locallife/1.jpg'}
        alt={'서동 고개 메인 이미지'}
        innerText={''}
      />
      <ContentContainer>
        <p className='my-3'>
          사람이 떠나간다. 서동고개가 멈춰버렸다. 남은건 추억 가득한 빈집뿐..
        </p>
        <p className='my-3'>
          2000년대 부터 서동고개의 인구는 하염없이 빠져나가고있다.
        </p>
        <p className='my-3'>
          이제는 노인, 그리고 중년을 넘은 분들만 거의 살고 있다.골목에 젊은이가
          한 명이라도 걸어가면,
        </p>
        <p className='my-3'>
          노인 분들은 그저 반가워서 또 그리워서 쳐다보곤 한다. 그리고 이내,
          반가워서 말을 걸어본다.
        </p>
        <p className='my-3'>
          &quot;어디서 왔는교?&quot; &quot;우리 손자랑 똑같네&quot; &quot;여기
          이사왔나?&quot;
        </p>
        <p className='my-3'>
          서동고개에 방문한다면 겪을 수 있는 현재의 모습이다. 여러 인프라가
          부족한 이 곳에서.
        </p>
        <p className='my-3'>젊은이들은 계속 이곳을 떠나고 만 있다.</p>
        <p className='my-3'>
          이것이 우리가 소셜 다이닝 과 제빵 클래스를 하는 목적이다.
        </p>
        <p className='my-3'>
          한 사람 한 사람이 우리가 만든 공간에 모여 커뮤니티를 형성하고, 모임을
          만들고,
        </p>
        <p className='my-3'>
          낙후된 지역의 사람들이 모여, 재방문하고 카페가 생기고, 음식점이
          생기고,
        </p>
        <p className='my-3'>공방이 생기는 도시재생이 되는 사례를 말이다.</p>

        <p className='my-3'>
          이미 감천문화마을, 흰 여울문화마을 등 검증된 사례가 있다. 그리고
          서동도 할 수 있다.
        </p>

        <p className='my-3'>
          우리는 미약하지만 긍정적인 미래를 바라보며 서동고개를 하나씩 바꿔보려
          한다.
        </p>
        <p className='my-1 font-bold'>서동의골목을걸으면, 빈집이너무많다.</p>
        <p className='my-1 font-bold'>
          그래도 수많은 빈집중에 누군가는 살고있다.
        </p>
        <p className='my-1 font-bold'>
          그럴수록 사람간의 소통과 인연이 필요해 보인다.
        </p>
      </ContentContainer>
    </>
  );
};

export default Locallife;
