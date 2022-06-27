import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { NextSeo } from 'next-seo';
import Layout from '@components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextSeo
        title='가깝지만 먼 동네, 서동 - 고개서동 프로젝트'
        description='골목길의 등불 조차 어색한 동네에 사람들의 이야기와 향기를 불어넣고 있습니다. 현재, 서동부엌, 서동영화, 서동서재 등을 운영하고 있습니다.'
        canonical='https://project-seodong.vercel.app'
        openGraph={{
          url: 'https://project-seodong.vercel.app',
          title: '가깝지만 먼 동네, 서동 - 고개서동 프로젝트',
          description:
            '골목길의 등불 조차 어색한 동네에 사람들의 이야기와 향기를 불어넣고 있습니다. 현재, 서동부엌, 서동영화, 서동서재 등을 운영하고 있습니다.',
          images: [
            {
              url: 'https://project-seodong.vercel.app/img/main/6.jpeg',
              width: 800,
              height: 600,
              alt: '가깝지만 먼 동네, 서동 - 고개서동 프로젝트',
              type: 'image/jpeg',
            },
          ],
          site_name: '가깝지만 먼 동네, 서동 - 고개서동 프로젝트',
        }}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
