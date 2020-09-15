import { withTranslation } from '../i18n';
import LanguageSwitcher from '../components/LanguageSwitcher';

function Home({ t }) {
  return (
    <div>
      <LanguageSwitcher />
      <h1 className="text-4xl text-indigo-500">{t('bonjour')}</h1>
      <h1 className="text-4xl text-indigo-500">{t('hey')}</h1>
    </div>
  );
}

export default withTranslation()(Home);
