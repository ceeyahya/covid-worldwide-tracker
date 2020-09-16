import { useEffect } from 'react';
import App from 'next/app';
import { appWithTranslation } from '../i18n';
import '../styles/tailwind.css';
import Fonts from '../components/Fonts';
import Layout from '../components/Layout';
import Header from '../components/Header';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Fonts();
  });

  return (
    <div className="bg-gray-50">
      <Layout>
        <Header />
      </Layout>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

MyApp.getInitialProps = async (appContext) => ({
  ...(await App.getInitialProps(appContext)),
});

export default appWithTranslation(MyApp);
