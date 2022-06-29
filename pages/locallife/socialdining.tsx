import ContentContainer from '@components/Project/ContentContainer';
import type { NextPage } from 'next';
import SimpleImageSlider from 'react-simple-image-slider';

const images = [
  { url: '/locallife/socialdining/slideImgs/1.jpeg' },
  { url: '/locallife/socialdining/slideImgs/2.jpeg' },
  { url: '/locallife/socialdining/slideImgs/3.jpeg' },
  { url: '/locallife/socialdining/slideImgs/4.jpeg' },
  { url: '/locallife/socialdining/slideImgs/5.jpeg' },
];

const SocialDining: NextPage = () => {
  return (
    <>
      <ContentContainer>
        <div className='flex flex-wrap justify-between'>
          <div>
            <h2 className='text-lg font-medium my-6'>
              서동부엌에서의 한끼 식사 _행복한 저녁 프로젝트 (소셜다이닝)
            </h2>
            <h2 className='text-lg font-medium mt-6'>
              새로운 만남과 이야기가 있는 시간입니다.
            </h2>
            <div className='h-3' />
            <p className='my-3'>
              발길이 닿지 않은 동네의 소중한 공간을 활용하여 ,
            </p>
            <p className='my-3'>하나 둘 모여 식사를 하는 시간입니다.</p>
            <div className='h-3' />

            <p className='my-3'>
              호스트는 대화 주제를 선정 후, 주제에 어울리는 음식을 선정합니다.
            </p>
            <p className='my-3'>호스트 주도 아래, 요리를 진행합니다.</p>
            <p className='my-3'>
              완성된 음식를 함께 먹으며, 자유롭고 편안한 대화가 이루어집니다.
            </p>
            <div className='h-3' />
            <div className='h-3' />
            <div className='h-3' />

            <div>
              <p className='my-4'>[운영 방식]</p>
              <p className='my-4'>호스트 - 컨텐츠 기획 및 요리 선정</p>
              <p className='my-4'>서동 부엌 - 컨텐츠 홍보 및 참가자 모집 분</p>
              <p className='my-4'>
                ※ 소셜다이닝을 원하시는 분들은 언제든지 문의주시기 바랍니다.
              </p>
              <div className='h-3' />
              <div className='h-3' />
              <div className='text-center mt-20'>
                <a
                  target='_blank'
                  href='https://pf.kakao.com/_VCxnsb/chat'
                  rel='noreferrer'
                  className='bg-yellow-400 text-yellow-900 border-none font-extrabold cursor-pointer hover:opacity-80 m-3 w-40 inline-block p-3 text-center'
                >
                  카카오
                </a>
              </div>
            </div>
          </div>
          <div>
            <div>
              <SimpleImageSlider
                width={500}
                height={650}
                images={images}
                showBullets={true}
                showNavs={false}
                autoPlay={true}
              />
            </div>
          </div>
        </div>

        {/* <div className='flex flex-wrap space-x-3 space-y-4 mt-20 justify-between'>
          <div>
            <p className='my-4'>[운영 방식]</p>
            <p className='my-4'>호스트 - 컨텐츠 기획 및 요리 선정</p>
            <p className='my-4'>서동 부엌 - 컨텐츠 홍보 및 참가자 모집 분</p>
            <div className='h-3' />
            <div className='h-3' />
            <div className='text-center mt-20'>
              <a
                target='_blank'
                href='https://pf.kakao.com/_VCxnsb/chat'
                rel='noreferrer'
                className='bg-yellow-400 text-yellow-900 border-none font-extrabold cursor-pointer hover:opacity-80 m-3 w-40 inline-block p-3 text-center'
              >
                카카오
              </a>
            </div>
          </div>
        </div> */}
      </ContentContainer>
    </>
  );
};

export default SocialDining;
