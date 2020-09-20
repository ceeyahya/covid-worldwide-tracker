import { withTranslation } from '../i18n';

function CountryCardBody({ t, cases, deaths, recovered }) {
  return (
    <ul className="grid grid-cols-3 gap-4">
      <li className="col-span-1 bg-white">
        <div className="flex flex-col text-center">
          <h3 className="text-lg font-semibold">{cases}</h3>
          <p className="text-base text-gray-500">{t('Cases')}</p>
        </div>
      </li>
      <li className="col-span-1 bg-white">
        <div className="flex flex-col text-center">
          <h3 className="text-lg font-semibold">{recovered}</h3>
          <p className="text-base text-gray-500">{t('Recovered')}</p>
        </div>
      </li>
      <li className="col-span-1 bg-white">
        <div className="flex flex-col text-center">
          <h3 className="text-lg font-semibold">{deaths}</h3>
          <p className="text-base text-gray-500">{t('Deaths')}</p>
        </div>
      </li>
    </ul>
  );
}

CountryCardBody.getInitialProps = async () => ({
  namespacesRequired: ['dashboard'],
});

export default withTranslation('dashboard')(CountryCardBody);
