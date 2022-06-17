import ContentContainer from '@components/Project/ContentContainer';
import { SmallTitle } from '@components/Project/SmallTitle';
import TopImage from '@components/Project/TopImage';
import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const Gogaeseodong: NextPage = () => {
  return (
    <>
      <TopImage
        src={'/project/gogaeseodong/1.jpg'}
        alt={'The Project SEO DONG'}
        innerText={'The Project SEO DONG'}
      />
      <ContentContainer>
        <SmallTitle>고개서동_프로젝트</SmallTitle>
        <p className='mt-12 mb-1'>1. 공간_고개서동</p>
        <p>#쓸모없는 공간은 없다. </p>
        <p>#공간 업사이클링</p>

        <p className='mt-12 mb-1'>
          고개서동 공간 프로젝트는 많은 유휴공간을 활용하여 진행하고 있습니다.
        </p>
        <p className='my-1'>
          서동고개는 많은 사람들이 떠나간 유휴공간이 존재합니다. 그곳은 주인
          없이 그대로 낡아가고 있습니다.
        </p>
        <p className='my-1'>
          버려진 공간을 재가공, 시공하여 새로운 공간으로 만들어 다시금 이곳을
          알리고 사람들이 찾게 하고자 합니다.
        </p>
        <p className='my-1'>
          지역 주민과 서동을 찾는 분들에게 필요한 새로운 공간을 제공하고 만들어
          가고 있습니다.
        </p>

        <h2 className='text-lg font-medium mt-6 mb-2'>2. 커뮤니티_ 고개서동</h2>
        <p># 함께, 다 같이, 모두가</p>
        <p># 대화, 소통, 파티, 모임</p>
        <p className='mt-12 mb-1'>
          고개서동은 재시공,가공된 공간에서 지역주민, 서동을 찾는 분들과 함께
          커뮤니티를 꾸려 나가려 합니다.
        </p>
        <p>
          &quot;사람이 떠난 빈자리는, 다시 사람으로 채운다.&quot; 라는 목표로
          즐겁고 소통이 가득한 커뮤니티를 구성합니다.
        </p>

        <h2 className='text-lg font-medium mt-6 mb-2'>3.오시는길</h2>

        <p className='my-1'>버스 이용시 _ 155번, 179번, 189번, 148번</p>
        <p className='my-1'>
          지하철 이용시 _ 부산 지하철 1호선 온천장역 혹은 4호선
        </p>
        <p className='my-1'>
          서동역에서 내려서 위의 버스로 환승 후 &apos;서동고개&apos; 하차
        </p>
        <div className='mt-5 w-full border-b-2' />
        <div className='mt-5 text-center text-lg'>
          <h3 className='mb-8'>
            주요프로젝트 (사진 클릭시 해당 프로젝트로 이동)
          </h3>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>
            <Link href='/localspace/sharedkitchen'>
              <a>
                <Image
                  src='/project/gogaeseodong/2.jpg'
                  alt='공유주방'
                  width={300}
                  height={200}
                  objectFit='contain'
                />
                <div className='mt-2 mb-10'>공유주방</div>
              </a>
            </Link>
            <Link href='/localspace/partyroomandstudio'>
              <a>
                <Image
                  src='/project/gogaeseodong/3.jpg'
                  alt='파티룸'
                  width={300}
                  height={200}
                  objectFit='contain'
                />
                <div className='mt-2 mb-10'>파티룸</div>
              </a>
            </Link>
            <Link href='/localspace/partyroomandstudio'>
              <a>
                <Image
                  src='/project/gogaeseodong/4.jpg'
                  alt='스튜디오'
                  width={300}
                  height={200}
                  objectFit='contain'
                />
                <div className='mt-2 mb-10'>스튜디오</div>
              </a>
            </Link>
            <Link href='/locallife/class'>
              <a>
                <Image
                  src='/project/gogaeseodong/5.jpg'
                  alt='공유주방'
                  width={300}
                  height={200}
                  objectFit='contain'
                />
                <div className='mt-2 mb-10'>소셜다이닝, 클래스</div>
              </a>
            </Link>
          </div>
        </div>
      </ContentContainer>
    </>
  );
};

export default Gogaeseodong;
