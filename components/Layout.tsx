import React, { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
import { bgColor, menus } from '@libs/options';
import { mediaSize } from '@libs/media';
import { Router, useRouter } from 'next/router';
import NavBar from '@components/Menu/NavBar';

const ContentLayout = tw.div<{ $isSideMenuShow: boolean }>`
${(_) => bgColor}
absolute
w-full
-z-50`;

const Spacer = tw.div``;

const Footer = tw.footer`
mt-52
text-center
text-xs
font-thin
`;

interface IProps {
  children: React.ReactNode;
}
export default function Layout({ children }: IProps) {
  const [isSideMenuShow, setIsSideMenuShow] = useState(false);
  const handleResize = () => {
    if (window.innerWidth > mediaSize.tablet) {
      setIsSideMenuShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    Router.events.on('routeChangeComplete', () => setIsSideMenuShow(false));
    return () => {
      Router.events.off('routeChangeComplete', () => setIsSideMenuShow(false));
    };
  }, []);
  const { asPath } = useRouter();

  return (
    <>
      {asPath != '/' && (
        <>
          <NavBar
          // isSideMenuShow={isSideMenuShow}
          // setIsSideMenuShow={setIsSideMenuShow}
          // menuItems={[...menus]}
          />
          <Spacer className='h-20' />
        </>
      )}

      <ContentLayout $isSideMenuShow={isSideMenuShow}>
        <>{children}</>
        <Footer>
          Coypyright © 2022 The Project SEODONG All rights reserved.
        </Footer>
      </ContentLayout>
    </>
  );
}
