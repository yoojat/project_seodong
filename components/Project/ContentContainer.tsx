import { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

const ContentContainer = ({ children }: IProps) => (
  <div className='px-4 py-16 w-full max-w-5xl font-light text-sm mx-auto border-b'>
    {children}
  </div>
);

export default ContentContainer;
