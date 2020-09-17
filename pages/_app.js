import { useEffect } from 'react';
import App from 'next/app';
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
    <div className="">
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
    </div>
  );
}

MyApp.getInitialProps = async (appContext) => ({
  ...(await App.getInitialProps(appContext)),
});

export default appWithTranslation(MyApp);
