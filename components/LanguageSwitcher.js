import { useContext } from 'react';
import { I18nContext } from 'next-i18next';
import { i18n } from '../i18n';

export default function LanguageSwitcher() {
  const {
    i18n: { language },
  } = useContext(I18nContext);
  return (
    <div>
      <button onClick={() => i18n.changeLanguage('ar')}>AR</button>
      <button onClick={() => i18n.changeLanguage('fr')}>FR</button>
    </div>
  );
}
