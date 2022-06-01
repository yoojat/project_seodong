import React, { useEffect, useState } from 'react';
import NavBar from './Menu/NavBar';
import tw from 'tailwind-styled-components';
import { bgColor, menus } from '@libs/options';
import { mediaSize } from '@libs/media';
import { Router, useRouter } from 'next/router';
import Image from 'next/image';

const ContentLayout = tw.div<{ $isSideMenuShow: boolean }>`
${(_) => bgColor}
absolute
w-full
-z-50
`;

const Footer = tw.footer`
  text-[#EFDCCA]
  w-full
  py-5
  bg-[#fda4af]
  text-center
  font-semibold
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
        <NavBar
        // isSideMenuShow={isSideMenuShow}
        // setIsSideMenuShow={setIsSideMenuShow}
        // menuItems={[...menus]}
        />
      )}

      <ContentLayout $isSideMenuShow={isSideMenuShow}>
        <>{children}</>
        <Footer>123</Footer>
      </ContentLayout>
    </>
  );
}
