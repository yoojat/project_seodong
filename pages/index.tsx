import type { NextPage } from 'next';
import tw from 'tailwind-styled-components';

interface ButtonProps {
  $primary: boolean;
}

const Button = tw.button<ButtonProps>`
  flex
  ${(props: ButtonProps) =>
    props.$primary ? 'bg-indigo-600' : 'bg-indigo-300'}
`;

const Home: NextPage = () => {
  return (
    <div className='bg-red-500'>
      <h1 className='text-black'>it works</h1>
      <Button $primary={true}>button</Button>
    </div>
  );
};

export default Home;
