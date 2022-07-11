import ContentContainer from '@components/Project/ContentContainer';
import { SmallTitle } from '@components/Project/SmallTitle';
import TopImage from '@components/Project/TopImage';
import type { NextPage } from 'next';
import Image from 'next/image';
import TopImgSrc from '../../public/project/operators/temp.jpeg';
import ImgSrc1 from '../../public/project/operators/3.jpeg';
import ImgSrc2 from '../../public/project/operators/1.jpeg';
import ImgSrc3 from '../../public/project/operators/2.jpeg';
import ImgSrc4 from '../../public/project/operators/4.jpeg';

const Operators: NextPage = () => {
  return (
    <>
      <TopImage src={TopImgSrc} alt={'만든이들'} innerText={'만든이'} />
      <ContentContainer>
        <SmallTitle>세상에 쓸모없는 공간은 없다.</SmallTitle>
        <p className='my-4'>
          안녕하십니까. 도시의 유휴공간을 활용하여, 새로운 가치를 창출해 나가는
          &quot;(주)크리플레이&quot;입니다.
        </p>
        <div className='h-6' />

        <p className='my-4'>가치있는 공간과 지속가능성을 함께 고려하며,</p>
        <p className='my-4'>
          도시의 버려지거나 오래되어 낡은 것들을 재해석하는 것에 귀기울여
          왔습니다.
        </p>

        <div className='h-6' />

        <p className='my-4'>
          지난 5년간, 버려지거나 쓰임없는 공간들을 활용하여,
        </p>
        <p className='my-4'>사람들이 찾아오는 공간을 만들어 왔습니다.</p>

        <p className='my-4'>
          장소와 위치에 맞는 공간을 기획, 인테리어 시공 및 브랜딩,
        </p>
        <p className='my-4'>자체 온라인 시스템 도입, 마케팅 등을 통해,</p>
        <p className='my-4'>20여개 이상의 공간을 직접 운영해 나갔으며,</p>
        <p className='my-4'>
          다양한 공간 컨설팅을 함께 병행해 나가고 있습니다.
        </p>
        <p className='my-4'>유휴공간을 활용하는 것은,</p>
        <p className='my-4'>
          상권좋은 공간을 기획, 운영하는 것보다 훨씬 힘든 일입니다.
        </p>
        <p className='my-4'>하지만, 이러한 장소를 잘 활용한다면,</p>
        <p className='my-4'>
          적은 투자에도 불구하고 지속가능한 구조를 만들수 있습니다.
        </p>

        <div className='h-6' />

        <p className='my-4'>
          또한, 대부분의 사람들이 공간을 만들기만 하면, 끝이라는 생각을
          가집니다.
        </p>
        <p className='my-4'>
          다양한 경험을 통해, 운영노하우와 자체 온라인 시스템을 도입하여,
        </p>
        <p className='my-4'>
          최소인력으로 최대효과를 낼수있는 관리체계를 만들어 운영해 왔습니다.
        </p>

        <div className='h-' />
        <p className='my-4'>
          유휴공간 활용에 관한 의뢰와 상담문의가 있으시면 언제든지 연락주시기
          바랍니다.
        </p>

        <div className='mt-32 w-full border-b-2' />

        <div className='mt-5 text-center text-lg'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>
            <Image
              src={ImgSrc1}
              alt='공유주방'
              width={300}
              height={200}
              objectFit='contain'
              placeholder='blur'
            />
            <Image
              src={ImgSrc2}
              alt='공유주방'
              width={300}
              height={200}
              objectFit='contain'
            />
            <Image
              src={ImgSrc3}
              alt='공유주방'
              width={300}
              height={200}
              objectFit='contain'
              placeholder='blur'
            />

            <Image
              src={ImgSrc4}
              alt='공유주방'
              width={300}
              height={200}
              objectFit='contain'
              placeholder='blur'
            />
          </div>
        </div>
      </ContentContainer>
    </>
  );
};

export default Operators;
