import { appWithTranslation } from '../i18n';
import '../styles/tailwind.css';
import Fonts from '../components/Fonts';
import Layout from '../components/Layout';
import Header from '../components/Header';

class MyApp extends React.Component {
  componentDidMount() {
    Fonts();
  }

  static async getInitialProps() {
    const appProps = await App.getInitialProps(appContext);
    return { ...appProps };
  }

  render(props) {
    const { Component, pageProps } = this.props;

    return (
      <div>
        <Layout>
          <Header />
        </Layout>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    );
  }
}

export default appWithTranslation(MyApp);
