import { useEffect } from 'react';
import App from 'next/app';
import Head from 'next/head';
import { ReactQueryDevtools } from 'react-query-devtools';
import { ReactQueryCacheProvider, QueryCache } from 'react-query';
import { Hydrate } from 'react-query/hydration';
import { appWithTranslation } from '../i18n';
import '../styles/tailwind.css';
import Fonts from '../components/Fonts';
import Layout from '../components/Layout';
import Header from '../components/Header';

const queryCache = new QueryCache();

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Fonts();
  });

  return (
    <div>
      <Head>
        <title>COVID-19 Tracker Worldwide</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#1f64f1" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      <body className="bg-gray-50">
        <Layout>
          <Header />
        </Layout>
        <Layout>
          <ReactQueryDevtools initialIsOpen />
          <ReactQueryCacheProvider queryCache={queryCache}>
            <Hydrate state={pageProps.dehydratedState}>
              <Component {...pageProps} />
            </Hydrate>
          </ReactQueryCacheProvider>
        </Layout>
      </body>
    </div>
  );
}

MyApp.getInitialProps = async (appContext) => ({
  ...(await App.getInitialProps(appContext)),
});

export default appWithTranslation(MyApp);
