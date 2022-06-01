import Link from 'next/link';
import { useState } from 'react';
import tw from 'tailwind-styled-components';

const MenuItemWrapper = tw.div`
  select-none
  border-b

`;
const MenuItem = tw.div`
  flex
  justify-between
  py-3
  px-5
  cursor-pointer
`;
const MenuTitle = tw.div`
  text-sm
  font-extralight
`;
const MenuDropBtn = tw.div`
  inline-flex
  items-center
  justify-center
  cursor-pointer
`;
const SubMenuContainer = tw.div`
  mb-3
`;

const SubMenuItem = tw.div`
  px-8
  py-1
  first:py-0
  font-thin
  text-sm
  cursor-pointer
`;

interface IProps {
  title: string;
  path: string;
  subtitles: {
    title: string;
    path: string;
  }[];
}
[];

const MenuItemComponent = ({ title, subtitles, path }: IProps) => {
  const [isShowSubtitles, setIsShowSubtitles] = useState(false);
  return (
    <MenuItemWrapper>
      <MenuItem>
        <Link href='/entrance'>
          <a>
            <MenuTitle>{title}</MenuTitle>
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
      </MenuItem>
      {isShowSubtitles && (
        <SubMenuContainer>
          {subtitles?.map((subtitle, index) => (
            <Link key={index} href='/project/seodong'>
              <a>
                <SubMenuItem>{subtitle.title}</SubMenuItem>
              </a>
            </Link>
          ))}
        </SubMenuContainer>
      )}
    </MenuItemWrapper>
  );
};

export default MenuItemComponent;
