import { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

const ContentContainer = ({ children }: IProps) => (
  <div className='px-4 lg:px-10 py-16 w-full max-w-7xl font-light text-sm mx-auto border-b mt-16'>
    {children}
  </div>
);

export default ContentContainer;
