import { useState } from 'react';
import tw from 'tailwind-styled-components';
import MenuItemComponent from '@components/Menu/MenuItemComponent';
import { menus } from '@libs/options';
import Link from 'next/link';
import Router from 'next/router';

const TopBarWrapper = tw.div`
  fixed
  w-full
  border-b
  bg-white
`;

const TopBarContainer = tw.div`
  flex
  justify-center
  items-center
  lg:justify-between
  py-2.5
  lg:py-0
  max-w-5xl
  mx-auto
  
`;
const TopBarItem = tw.div`
  font-extralight
  text-lg
  md:text-sm
  lg:text-lg
  lg:font-light
  lg:px-3
  cursor-pointer
`;

const MenuIcon = tw.div`
  absolute
  top-3
  md:top-2
  left-4
  cursor-pointer
  lg:hidden
`;

const ContentConver = tw.div<{ isOpen: boolean }>`
  ${(p: { isOpen: boolean }) =>
    p.isOpen ? 'visible bg-opacity-60' : 'bg-opacity-0 invisible'}
  bg-zinc-900
  w-full
  h-screen
  fixed
  transition-all
  duration-500
`;

const Menu = tw.div<{ isOpen: boolean }>`
${(p: { isOpen: any }) => (p.isOpen ? '-left-0' : '-left-full')}
bg-white
  h-screen
  w-72
  fixed
  py-2
  transition-all
  duration-500
`;

const MenuItemContainer = tw.div`
  items-center
`;

const CloseButton = tw.div`
  absolute
  -right-14
  top-3
  w-10
  cursor-pointer
  text-white
`;

const TopBarMenu = tw.div`
hidden
lg:block

`;
const TopBarMenuItemContainer = tw.div`
  flex
`;
const TopBarMenuItem = tw.div`
  px-3
  text-sm
  font-thin
  cursor-pointer
  py-5
`;

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  //  메뉴 클릭하여 라우터 이동시 사이드 메뉴 닫아줌
  Router.events.on('routeChangeStart', () => {
    setIsOpen(false);
  });

  return (
    <>
      <TopBarWrapper>
        <TopBarContainer>
          <MenuIcon onClick={() => setIsOpen(true)}>
            <svg
              width='24'
              height='24'
              xmlns='http://www.w3.org/2000/svg'
              fillRule='evenodd'
              clipRule='evenodd'
            >
              <path
                d='M24 18v1h-24v-1h24zm0-6v1h-24v-1h24zm0-6v1h-24v-1h24z'
                fill='#1040e2'
              />
              <path d='M24 19h-24v-1h24v1zm0-6h-24v-1h24v1zm0-6h-24v-1h24v1z' />
            </svg>
          </MenuIcon>
          <Link href='/'>
            <a>
              <TopBarItem>The Project SEODONG</TopBarItem>
            </a>
          </Link>
          <TopBarMenu>
            <TopBarMenuItemContainer>
              {menus.map((menu, index) => (
                <TopBarMenuItem key={index}>{menu.title}</TopBarMenuItem>
              ))}
            </TopBarMenuItemContainer>
          </TopBarMenu>
          <div />
        </TopBarContainer>
      </TopBarWrapper>
      <ContentConver isOpen={isOpen} onClick={() => setIsOpen(false)} />

      <Menu isOpen={isOpen}>
        <CloseButton onClick={() => setIsOpen(false)}>
          <svg
            fill='white'
            clipRule='evenodd'
            fillRule='evenodd'
            strokeLinejoin='round'
            strokeMiterlimit='2'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z' />
          </svg>
        </CloseButton>
        <MenuItemContainer>
          {menus.map((menu, index) => (
            <MenuItemComponent
              key={index}
              title={menu.title}
              subtitles={menu.subtitles}
              path={menu.path}
            />
          ))}
        </MenuItemContainer>
      </Menu>
    </>
  );
}
