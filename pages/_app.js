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
        <div className="bg-white">
          <div className="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
            <div className="flex justify-center md:order-2">
              <a
                href="https://twitter.com/ceeyahya"
                className="ml-6 text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href="https://github.com/ceeyahya"
                className="ml-6 text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">GitHub</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
            <div>
              <span className="text-base">
                Icons made by{' '}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.flaticon.com/authors/freepik"
                  title="Freepik"
                  className="font-semibold text-blue-600"
                >
                  Freepik
                </a>{' '}
                from{' '}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.flaticon.com/"
                  title="Flaticon"
                  className="text-blue-600 "
                >
                  {' '}
                  www.flaticon.com
                </a>
              </span>
            </div>
            <div className="mt-8 md:mt-0 md:order-1">
              <p className="text-base leading-6 text-center text-gray-500">
                👨🏽‍💻 Developed by{' '}
                <a
                  className="font-semibold text-blue-600"
                  href="https://chahineyahya.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chahine Yahya
                </a>{' '}
                {new Date().getFullYear()}, All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

MyApp.getInitialProps = async (appContext) => ({
  ...(await App.getInitialProps(appContext)),
});

export default appWithTranslation(MyApp);
