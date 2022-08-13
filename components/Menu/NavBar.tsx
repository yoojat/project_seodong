import { useState } from 'react';
import tw from 'tailwind-styled-components';
import MenuItemComponent from '@components/Menu/MenuItemComponent';
import { menus } from '@libs/options';
import Link from 'next/link';
import Router from 'next/router';

const TopBarWrapper = tw.div`
  fixed
  w-full
  bg-[#f7f6f2]
  pt-3
  pb-3
  px-3
  lg:px-16
`;

const TopBarContainer = tw.div`
  flex
  items-center
  justify-between
  lg:justify-between
  py-2.5
  2xl:py-6
  lg:py-0
  mx-auto
  text-slate-600
  
`;
const TopBarItem = tw.div`
  font-bold
  text-lg
  md:text-sm
  lg:text-xl
  lg:font-normal
  cursor-pointer
`;

const MenuIcon = tw.div`
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
  ease-in-out
`;

const Menu = tw.div<{ isOpen: boolean }>`
${(p: { isOpen: any }) => (p.isOpen ? '-right-0' : '-right-full')}
bg-white
  h-screen
  w-72
  fixed
  py-2
  transition-all
  duration-500
  opacity-90
`;

const MenuItemContainer = tw.ul`
  items-center
`;

const CloseButton = tw.div`
  absolute
  -left-14
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
  cursor-pointer
  py-5
  font-normal
  hover:text-amber-900
  relative
  group
`;

const DownMenu = tw.div<{ downMenuOpen: boolean }>`
  w-full
  bg-stone-600
  border-none
  absolute
  overflow-hidden
  transition-all
  duration-300
  ease-in-out

${(p: { downMenuOpen: boolean }) => (p.downMenuOpen ? `max-h-96` : 'max-h-0')}
`;

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [downMenuOpen, setDownMenuOpen] = useState(false);

  //  메뉴 클릭하여 라우터 이동시 사이드 메뉴 닫아줌
  Router.events.on('routeChangeStart', () => {
    setIsOpen(false);
    console.log(Router.pathname);
    setDownMenuOpen(false);
  });

  return (
    <>
      <TopBarWrapper>
        <TopBarContainer>
          <Link href='/'>
            <a>
              <TopBarItem>
                서동부엌, 서동영화, 서동문방 - 고개서동 프로젝트
              </TopBarItem>
            </a>
          </Link>
          <TopBarMenu onMouseEnter={() => setDownMenuOpen(true)}>
            <TopBarMenuItemContainer>
              {menus.map((menu, index) => (
                <div key={index}>
                  <TopBarMenuItem>
                    <Link href={menu.path}>
                      <span>{menu.title}</span>
                    </Link>
                    <div className='absolute top-12 group-hover:bg-yellow-900 text-white w-32 pl-3 py-2 invisible group-hover:visible transition-colors ease-in-out duration-300'>
                      <ul className='list-none'>
                        {menu.subtitles.map((subtitle, index) => (
                          <Link key={index} href={subtitle.path}>
                            <a>
                              <li className='hover:text-stone-100 transition-colors duration-300 py-2'>
                                {subtitle.title}
                              </li>
                            </a>
                          </Link>
                        ))}
                      </ul>
                    </div>
                  </TopBarMenuItem>
                </div>
              ))}
            </TopBarMenuItemContainer>
          </TopBarMenu>
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
        </TopBarContainer>
        {/* <DownMenu
          onMouseLeave={() => setDownMenuOpen(false)}
          downMenuOpen={downMenuOpen}
        >
          <div className='flex justify-center'>
            <ul className='flex  py-6'>
              {menus.map((menu, index) => (
                <li key={index} className='max-w-4xl mx-10 text-white'>
                  <Link href={menu.path}>
                    <a>
                      <h3 className='mb-2 font-extralight'>{menu.title}</h3>
                    </a>
                  </Link>
                  <ul className='font-thin text-sm text-stone-300 space-y-2'>
                    {menu.subtitles.map((subtitle, index) => (
                      <Link key={index} href={subtitle.path}>
                        <a>
                          <li className='hover:text-stone-100 transition-colors duration-300'>
                            {subtitle.title}
                          </li>
                        </a>
                      </Link>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </DownMenu> */}
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
              number={menu.number}
            />
          ))}
        </MenuItemContainer>
      </Menu>
    </>
  );
}
