import Link from 'next/link';
import { useState } from 'react';
import tw from 'tailwind-styled-components';

const MenuItemWrapper = tw.li`
  select-none
  border-b-[0.5px]
`;
const MenuItem = tw.div`
  flex
  justify-between
  cursor-pointer
  flex-col
`;
const MenuTitle = tw.div`
  text-sm
  font-medium
  flex
`;
const MenuDropBtn = tw.div`
  inline-flex
  items-center
  justify-center
  cursor-pointer
`;
const SubMenuContainer = tw.ul<{ isOpen: boolean }>`
  mt-1
  transition-all
  duration-500
  overflow-hidden
  ${(p: { isOpen: boolean }) => (p.isOpen ? `max-h-96` : 'max-h-0')}

`;

const SubMenuItem = tw.div`
  px-8
  first:py-0
  font-light
  text-sm
  cursor-pointer
  hover:text-yellow-900

`;

interface IProps {
  title: string;
  path: string;
  number: string;
  subtitles: {
    title: string;
    path: string;
  }[];
}
[];

const MenuItemComponent = ({ title, subtitles, path, number }: IProps) => {
  const [isShowSubtitles, setIsShowSubtitles] = useState(false);
  return (
    <MenuItemWrapper>
      <MenuItem>
        <div
          className={`flex justify-between items-center py-2 px-4 transition-all ${
            isShowSubtitles ? 'bg-slate-100' : ''
          }`}
        >
          <Link href={path}>
            <a>
              <MenuTitle>
                <span className='scale-75 inline-block text-sm align-text-top mr-4'>
                  {number}
                </span>
                <span className='text-md'>{title}</span>
              </MenuTitle>
            </a>
          </Link>
          <MenuDropBtn onClick={() => setIsShowSubtitles((prev) => !prev)}>
            {isShowSubtitles ? (
              <svg
                viewBox='0 0 45 15'
                width='25'
                height='25'
                xmlns='http://www.w3.org/2000/svg'
                fillRule='evenodd'
                clipRule='evenodd'
              >
                <path d='M23.245 20l-11.245-14.374-11.219 14.374-.781-.619 12-15.381 12 15.391-.755.609z' />
              </svg>
            ) : (
              <svg
                viewBox='0 0 45 15'
                width='25'
                height='25'
                xmlns='http://www.w3.org/2000/svg'
                fillRule='evenodd'
                clipRule='evenodd'
              >
                <path d='M23.245 4l-11.245 14.374-11.219-14.374-.781.619 12 15.381 12-15.391-.755-.609z' />
              </svg>
            )}
          </MenuDropBtn>
        </div>

        <SubMenuContainer isOpen={isShowSubtitles}>
          {subtitles?.map((subtitle, index) => (
            <Link key={index} href={subtitle.path}>
              <li className={'py-1'}>
                <SubMenuItem>{subtitle.title}</SubMenuItem>
              </li>
            </Link>
          ))}
        </SubMenuContainer>
      </MenuItem>
    </MenuItemWrapper>
  );
};

export default MenuItemComponent;
