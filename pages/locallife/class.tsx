import ContentContainer from '@components/Project/ContentContainer';
import type { NextPage } from 'next';
import SimpleImageSlider from 'react-simple-image-slider';

const images = [
  { url: '/locallife/cookingclass/1.jpeg' },
  { url: '/locallife/cookingclass/2.jpeg' },
  { url: '/locallife/cookingclass/3.jpeg' },
  { url: '/locallife/cookingclass/4.jpeg' },
  { url: '/locallife/cookingclass/5.jpeg' },
  { url: '/locallife/cookingclass/6.jpeg' },
  { url: '/locallife/cookingclass/7.webp' },
];

const Class: NextPage = () => {
  return (
    <>
      <ContentContainer>
        <div className='flex flex-wrap justify-between'>
          <div>
            <h2 className='text-lg font-medium my-6'>
              고개서동_모닝 쿠킹 클래스
            </h2>

            <p className='my-3'>
              서동의 아침은, 공유주방에서의 쿠키 굽는 내음새로 시작됩니다.
            </p>
            <div className='h-3' />
            <p className='my-3'>인근에 위치한 카페102 사장님께서,</p>
            <p className='my-3'>
              아침일찍, 서동 주민들에게 제공할 쿠키를 만들고 계십니다.
            </p>
            <p className='my-3'>
              항상 배우려는 자세와 따뜻한 성품으로, 친절하게 교육생들을
              맞이하십니다.
            </p>
            <p className='my-3'>
              빵과 쿠키를 배우고 싶으신 분들께서는, 좋은 선택이 될꺼에요.
            </p>
            <div className='h-3' />
            <p className='my-3'>
              친구, 연인들과 직접 빵과 과자를 만들 수도 있지만,
            </p>
            <p className='my-3'>
              직접 만들어 보신적이 없다면, 서동부엌의 쿠킹클래스를 통해
              배워나가시는 것을 추천 드려요.
            </p>
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
      </ContentContainer>
    </>
  );
};

export default Class;
