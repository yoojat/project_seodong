import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { NextSeo } from 'next-seo';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextSeo
        title='The Project Seodong'
        description='지역의 필요를 담아 서동 공유공간을 만들고, 지역에 사는 사람들의 이야기를 담아 아카이빙하는 프로젝트 서동으로, 유휴공간재생 전문집단 크리플레이에서 주도하고 있다.'
        canonical='https://project-seodong.vercel.app'
        openGraph={{
          url: 'https://project-seodong.vercel.app',
          title: 'The Project Seodong',
          description:
            '지역의 필요를 담아 서동 공유공간을 만들고, 지역에 사는 사람들의 이야기를 담아 아카이빙하는 프로젝트 서동으로, 유휴공간재생 전문집단 크리플레이에서 주도하고 있다.',
          images: [
            {
              url: 'https://project-seodong.vercel.app/img/main/1.jpg',
              width: 800,
              height: 600,
              alt: 'The Project Seodong',
              type: 'image/jpeg',
            },
          ],
          site_name: 'The Project Seodong',
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
