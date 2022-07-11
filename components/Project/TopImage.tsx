import Image from 'next/image';

interface IProps {
  src: string;
  alt: string;
  innerText: string;
}

const TopImage = ({ src, alt, innerText }: IProps) => {
  return (
    <>
      <div className='w-full mt-20 lg:flex justify-between mx-auto items-end'>
        <div className='h-24 text-4xl text-slate-600 flex items-end pl-10 lg:ml-[10vw] lg:text-5xl w-full max-w-xl mb-5'>
          <span className='align-bottom'>{innerText}</span>
        </div>
        <div className='pl-4 w-full relative h-96 xl:h-[600px] lg:max-w-6xl'>
          <Image
            src={src}
            alt={alt}
            objectFit='cover'
            layout='fill'
            placeholder='blur'
          />
        </div>
      </div>
    </>
  );
};

export default TopImage;
