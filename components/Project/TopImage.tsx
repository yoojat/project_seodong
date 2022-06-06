import Image from 'next/image';

interface IProps {
  src: string;
  alt: string;
  innerText: string;
}

const TopImage = ({ src, alt, innerText }: IProps) => {
  return (
    <>
      <div className='h-44 md:h-36 lg:h-96 w-full relative'>
        <Image src={src} alt={alt} layout='fill' objectFit='cover' />
        <div className='text-white absolute bottom-10 font-medium text-lg lg:text-2xl w-full text-left max-w-6xl left-1/2 -translate-x-1/2'>
          <span className='ml-28'>{innerText}</span>
        </div>
      </div>
    </>
  );
};

export default TopImage;
