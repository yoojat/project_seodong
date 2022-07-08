import ContentContainer from '@components/Project/ContentContainer';
import type { NextPage } from 'next';
import SimpleImageSlider from 'react-simple-image-slider';

const images = [
  { url: '/locallife/yuksashimi/1.jpeg' },
  { url: '/locallife/yuksashimi/2.jpeg' },
];

const Yuksashimi: NextPage = () => {
  return (
    <>
      <ContentContainer>
        <div className='flex flex-wrap justify-between'>
          <div>
            <h2 className='text-lg font-medium my-6'>진짜한우육회</h2>
            <p className='my-3'>
              고개서동 프로젝트는 유형의 공간 업사이클링 뿐만 아니라,
            </p>
            <div className='h-3' />
            <p className='my-3'>
              로컬 자원을 활용하여, 지역 내 지속가능한 비즈니스가 가능하다
            </p>
            <p className='my-3'>는 것을 실험해 나가고 있습니다.</p>
            <p className='my-3'>
              진짜한우육회는 로컬 내 유무형의 자원을 활용하여 만들어진 로컬
              브랜드입니다.
            </p>
            <p className='my-3'>서동 부엌의 공간자원,</p>
            <p className='my-3'>로컬 비즈니스를 꿈꾸는 플레이어들,</p>
            <p className='my-3'>
              서동 시장에서 공급받은 우수한 양질의 식자재 등을 활용하여
            </p>
            <p className='my-3'>운영되어지고 있습니다.</p>
            <div className='h-3' />
            <p className='my-3'>이번 로컬 브랜드 개발을 시작으로,</p>
            <p className='my-3'>로컬 플레이어들과 다양한 협업을 통해,</p>
            <p className='my-3'>
              지역 내 비즈니스 시장 활성화를 위해 노력할 예정입니다.
            </p>
          </div>
          <div className='lg:flex-1 w-full max-w-md mx-auto'>
            <div className='relative w-full h-0 pb-[125%] overflow-hidden'>
              <SimpleImageSlider
                width={'100%'}
                height={'100%'}
                images={images}
                showBullets={true}
                showNavs={false}
                autoPlay={true}
              />
            </div>
          </div>
        </div>
      </ContentContainer>
    </>
  );
};

export default Yuksashimi;
