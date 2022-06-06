import ContentContainer from '@components/Project/ContentContainer';
import type { NextPage } from 'next';
import Image from 'next/image';

const SocialDining: NextPage = () => {
  return (
    <>
      <ContentContainer>
        <h2 className='text-lg font-medium my-6'>
          고개한끼 _행복한저녁한끼프로젝트(소셜다이닝)
        </h2>
        <h2 className='text-lg font-medium mt-6'>
          새로운 만남과 이야기가 있는 저녁식사입니다.
        </h2>
        <p className='my-3'>
          대화 주제를 통해서 음식을 만들고, 식사를 마칠때 까지 허심탄회하고
          즐겁게 대화하는 커뮤니티입니다.
        </p>
        <p className='my-3'>
          호스트가 진행하는 대로 같이 요리하면서, 자유롭게 대화를 진행합니다.
        </p>
        <p className='my-3'>
          &apos;세상에 쓸모없는 공간은 없다&apos; 는 가치를 소셜다이닝
          참가자에게 알립니다.
        </p>
        <p className='my-3'>
          아무도 살지 않는 공간, 아무도 살지 않는 동네에서 사람들이 하나둘 모여
          같이 식사를 하며, 이야기를 합니다.
        </p>
        <p className='my-3'>
          결국 활용을 하지 않을 뿐, 쓸모없는 것은 없다는 것을 모두가 알게
          됩니다.
        </p>
        <p className='my-3'>
          서동이라는 낙후된 동네를 소개하면서, 젊은 층들에게 이러한 동네도 잘
          활용하여
        </p>
        <p className='my-3'>
          사람들이 찾아오는 문화 컨텐츠로 활용할 수 있다는 것을 보여주려 합니다.
        </p>

        <div className='flex flex-wrap space-x-3 space-y-4 mt-20 justify-between'>
          <div>
            <p className='my-1'>[운영 방식]</p>
            <p className='my-1'>참가비 : 20,000원 (1인)</p>
            <p className='my-1'>운영시간 : 18시30분 ~ 21시 30분</p>
            <div className='h-3' />
            <div className='h-3' />
            <p className='my-1'>[참가하기] 포스터 참고</p>
          </div>
          <div>
            <Image
              src='/locallife/socialdining/1.jpg'
              alt='고개서동_공유주방'
              width={600}
              height={850}
              objectFit={'cover'}
            />
          </div>
        </div>
      </ContentContainer>
    </>
  );
};

export default SocialDining;
