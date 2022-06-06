import ContentContainer from '@components/Project/ContentContainer';
import type { NextPage } from 'next';
import Image from 'next/image';

const Class: NextPage = () => {
  return (
    <>
      <ContentContainer>
        <h2 className='text-lg font-medium my-6'>고개서동_ 제빵클래스</h2>

        <p className='my-3'>다 같이 모여서 제빵을 배워보아요.</p>
        <div className='h-3' />
        <p className='my-3'>
          이른 아침부터 옹기종기 모여, 고개서동에 마련된 제빵
        </p>
        <p className='my-3'>클래스 공간에서 빵을 구워보는 건 어떨까요?</p>
        <div className='h-3' />
        <p className='my-3'>밀가루 반죽을 하고,</p>
        <p className='my-3'>버터를 녹이고,</p>
        <p className='my-3'>계란을 풀고,</p>
        <div className='h-3' />
        <p className='my-3'>강사님을 따라 하다보면</p>
        <div className='h-3' />
        <p className='my-3'>어느새 맛있는 쿠키와 빵이 완성 </p>
        <div className='h-3' />
        <p className='my-3'>
          단 , 하루 만에 쿠키와 빵을 굽는 걸 배우게 되네요.
        </p>
      </ContentContainer>
    </>
  );
};

export default Class;
