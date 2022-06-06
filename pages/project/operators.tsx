import ContentContainer from '@components/Project/ContentContainer';
import TopImage from '@components/Project/TopImage';
import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const Operators: NextPage = () => {
  return (
    <>
      <TopImage
        src={'/project/operators/1.jpg'}
        alt={'만든이들'}
        innerText={'만든이들'}
      />
      <ContentContainer>
        <p className='my-1'>
          어린시절 아름다웠던 추억이 많은 서동. 저희 모두는 이 지역 출신입니다.
        </p>
        <p className='my-1'>
          많은 사람들이 떠나 동네 곳곳이 낙후되었으며, 더 이상 예전 활기찼던
          분위기는 보기 힘들어 졌습니다.
        </p>
        <p className='my-1'>
          그런 안타까움과 함께 도시재생에 대한 관심은 시작되었고,
        </p>
        <p className='my-1'>
          각자의 추억을 되살리기 위해 늦기 전 행동 하기로 했습니다.
        </p>

        <div className='h-3' />

        <p className='my-1'>
          경험들이 쌓이면서 꿈만 꾸던 어린 시절보다 할 수 있는 것들이 많아졌고,
        </p>
        <p className='my-1'>
          인테리어 시공, 홈페이지 제작, 메뉴얼 제작, 기획, 커뮤니티 형성 등
        </p>

        <p className='my-1'>
          각자가 할 수 있는 가치 있는 능력을 활용해보기로 했습니다.
        </p>

        <div className='h-3' />

        <p className='my-1'>
          다른 지역의 성공적 사례를 적용하기 위해 배우고 노력한 결과
        </p>
        <p className='my-1'>
          고개 서동을 기획하고 만들 수 있게 되었고, 한걸음씩 나아가는 중입니다.
        </p>

        <div className='h-3' />
        <p className='my-1'>
          그렇게 시작된 저희는 쓸모 없어진 공간에 생기를 넣어,
        </p>
        <p className='my-1'>
          떠나간 사람들이 다시 찾아오는 공간을 만들고 있습니다
        </p>
        <p className='my-1'>
          이제 우리는 잊혀진 공간에 다시 사람들이 찾아올 수 있게, 활기를
          되찾아보려 합니다.
        </p>
        <p className='my-1'>
          댓글, 홍보, 등 작은 한마디가 고개서동_프로젝트에 많은 도움이 됩니다.
        </p>
        <p className='my-1'>많은 관심과 격려 부탁드립니다.</p>
        <p className='my-1'>감사합니다.</p>

        <div className='mt-5 w-full border-b-2' />

        <div className='mt-5 text-center text-lg'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>
            <Image
              src='/project/operators/2.jpg'
              alt='공유주방'
              width={300}
              height={200}
              objectFit='contain'
            />
            <Image
              src='/project/operators/3.jpg'
              alt='공유주방'
              width={300}
              height={200}
              objectFit='contain'
            />
            <Image
              src='/project/operators/4.jpg'
              alt='공유주방'
              width={300}
              height={200}
              objectFit='contain'
            />
            <Image
              src='/project/operators/5.jpg'
              alt='공유주방'
              width={300}
              height={200}
              objectFit='contain'
            />
          </div>
        </div>
      </ContentContainer>
    </>
  );
};

export default Operators;
