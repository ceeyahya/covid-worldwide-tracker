import { useQuery } from 'react-query';
import { QueryCache } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import { formatNumber } from '../utils/formatNumber';
import { withTranslation } from '../i18n';
import LoadingSpinner from '../components/LoadingSpinner';

const fetchMoroccoData = async () => {
  const res = await fetch(
    'https://disease.sh/v3/covid-19/countries/MA?yesterday=false&strict=true'
  );
  const data = await res.json();
  return data;
};

export async function getServerSideProps(context) {
  const queryCache = new QueryCache();
  await queryCache.prefetchQuery('data', fetchMoroccoData);
  return {
    props: {
      dehydratedState: dehydrate(queryCache),
    },
  };
}

function maroc({ t }) {
  const { status, data, error } = useQuery('data', fetchMoroccoData);
  const getPercentagePopulation = () => {
    const percentage = (data.cases * 100) / data.population;
    return percentage.toFixed(2);
  };
  if (status === 'loading') return <LoadingSpinner />;
  if (status === 'error') return <div>{error}</div>;

  return (
    <div className="mt-12 mb-16">
      <div className="flex items-center">
        <img
          src={data.countryInfo.flag}
          alt="Moroccan Flag"
          className="w-8 h-6 mr-2"
        />

        <h2 className="text-2xl font-bold">
          {data.country}{' '}
          <span className="font-normal text-gray-400">({data.continent})</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 mt-4 overflow-hidden bg-white rounded-lg shadow md:grid-cols-4">
        <div>
          <div className="px-4 py-5 sm:p-6">
            <dl>
              <dt className="text-base font-normal leading-6 text-gray-900">
                {t('Total Cases')}
              </dt>
              <dd className="flex items-baseline justify-between mt-1 md:block lg:flex">
                <div className="flex items-baseline text-2xl font-semibold leading-8 text-blue-600">
                  {formatNumber(data.cases)}
                  <span className="ml-2 text-sm font-medium leading-5 text-gray-500">
                    {t('from')} {formatNumber(data.population)}
                  </span>
                </div>
              </dd>
              <div className="inline-flex items-baseline px-3 py-1 text-sm font-normal leading-5 text-blue-800 bg-blue-100 rounded-sm md:mt-2">
                <svg
                  className="self-center flex-shrink-0 w-4 h-4 mr-1 -ml-1 text-blue-500 "
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z"
                    clipRule="evenodd"
                  />
                </svg>
                {getPercentagePopulation()}% {t('of the population')}
              </div>
            </dl>
          </div>
        </div>
        <div className="border-t border-gray-200 md:border-0 md:border-l">
          <div className="px-4 py-5 sm:p-6">
            <dl>
              <dt className="text-base font-normal leading-6 text-gray-900">
                {t('Total Recovered')}
              </dt>
              <dd className="flex items-baseline justify-between mt-1 md:block lg:flex">
                <div className="flex items-baseline text-2xl font-semibold leading-8 text-blue-600">
                  {formatNumber(data.recovered)}
                  <span className="ml-2 text-sm font-medium leading-5 text-gray-500">
                    {t('from')} {formatNumber(data.cases)}
                  </span>
                </div>
              </dd>
            </dl>
          </div>
        </div>
        <div className="border-t border-gray-200 md:border-0 md:border-l">
          <div className="px-4 py-5 sm:p-6">
            <dl>
              <dt className="text-base font-normal leading-6 text-gray-900">
                {t('Total Deaths')}
              </dt>
              <dd className="flex items-baseline justify-between mt-1 md:block lg:flex">
                <div className="flex items-baseline text-2xl font-semibold leading-8 text-blue-600">
                  {formatNumber(data.deaths)}
                  <span className="ml-2 text-sm font-medium leading-5 text-gray-500">
                    {t('from')} {formatNumber(data.cases)}
                  </span>
                </div>
              </dd>
            </dl>
          </div>
        </div>
        <div className="border-t border-gray-200 md:border-0 md:border-l">
          <div className="px-4 py-5 sm:p-6">
            <dl>
              <dt className="text-base font-normal leading-6 text-gray-900">
                {t('Total Active Cases')}
              </dt>
              <dd className="flex items-baseline justify-between mt-1 md:block lg:flex">
                <div className="flex items-baseline text-2xl font-semibold leading-8 text-blue-600">
                  {formatNumber(data.active)}
                  <span className="ml-2 text-sm font-medium leading-5 text-gray-500">
                    {t('from')} {formatNumber(data.cases)}
                  </span>
                </div>
              </dd>
            </dl>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-lg font-semibold leading-6 text-gray-900">
          {t('Today')}{' '}
          <span className="font-normal text-gray-400">
            ({t('Current day data is usually available around 0900PM')})
          </span>
        </h3>
        <div className="grid grid-cols-1 gap-5 mt-5 sm:grid-cols-3">
          <div className="overflow-hidden bg-white rounded-lg shadow">
            <div className="px-4 py-5 sm:p-6">
              <dl>
                <dt className="text-sm font-medium leading-5 text-gray-500 truncate">
                  {t('Cases Today')}
                </dt>
                <dd className="mt-1 text-3xl font-semibold leading-9 text-gray-900">
                  {formatNumber(data.todayCases)}
                </dd>
              </dl>
            </div>
          </div>
          <div className="overflow-hidden bg-white rounded-lg shadow">
            <div className="px-4 py-5 sm:p-6">
              <dl>
                <dt className="text-sm font-medium leading-5 text-gray-500 truncate">
                  {t('Recovered Today')}
                </dt>
                <dd className="mt-1 text-3xl font-semibold leading-9 text-gray-900">
                  {formatNumber(data.todayRecovered)}
                </dd>
              </dl>
            </div>
          </div>
          <div className="overflow-hidden bg-white rounded-lg shadow">
            <div className="px-4 py-5 sm:p-6">
              <dl>
                <dt className="text-sm font-medium leading-5 text-gray-500 truncate">
                  {t('Deaths Today')}
                </dt>
                <dd className="mt-1 text-3xl font-semibold leading-9 text-gray-900">
                  {formatNumber(data.todayDeaths)}
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-lg font-semibold leading-6 text-gray-900">
          {t('More Informations')}
        </h3>
        <div className="grid grid-cols-1 gap-5 mt-5 sm:grid-cols-3">
          <div className="overflow-hidden bg-white rounded-lg shadow">
            <div className="px-4 py-5 sm:p-6">
              <dl>
                <dt className="text-sm font-medium leading-5 text-gray-500 truncate">
                  {t('Total Tests')}
                </dt>
                <dd className="mt-1 text-3xl font-semibold leading-9 text-gray-900">
                  {formatNumber(data.tests)}
                </dd>
              </dl>
            </div>
          </div>
          <div className="overflow-hidden bg-white rounded-lg shadow">
            <div className="px-4 py-5 sm:p-6">
              <dl>
                <dt className="text-sm font-medium leading-5 text-gray-500 truncate">
                  {t('Critical Cases')}
                </dt>
                <dd className="mt-1 text-3xl font-semibold leading-9 text-gray-900">
                  {formatNumber(data.critical)}
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-lg font-semibold leading-6 text-gray-900">
          {t('Proportions per million people')}
        </h3>
        <div className="grid grid-cols-1 gap-5 mt-5 sm:grid-cols-3">
          <div className="overflow-hidden bg-white rounded-lg shadow">
            <div className="px-4 py-5 sm:p-6">
              <dl>
                <dt className="text-sm font-medium leading-5 text-gray-500 truncate">
                  {t('Cases per million people')}
                </dt>
                <dd className="mt-1 text-3xl font-semibold leading-9 text-gray-900">
                  {formatNumber(data.casesPerOneMillion)}
                </dd>
              </dl>
            </div>
          </div>
          <div className="overflow-hidden bg-white rounded-lg shadow">
            <div className="px-4 py-5 sm:p-6">
              <dl>
                <dt className="text-sm font-medium leading-5 text-gray-500 truncate">
                  {t('Recovered per million people')}
                </dt>
                <dd className="mt-1 text-3xl font-semibold leading-9 text-gray-900">
                  {formatNumber(data.recoveredPerOneMillion)}
                </dd>
              </dl>
            </div>
          </div>
          <div className="overflow-hidden bg-white rounded-lg shadow">
            <div className="px-4 py-5 sm:p-6">
              <dl>
                <dt className="text-sm font-medium leading-5 text-gray-500 truncate">
                  {t('Deaths per million people')}
                </dt>
                <dd className="mt-1 text-3xl font-semibold leading-9 text-gray-900">
                  {formatNumber(data.deathsPerOneMillion)}
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withTranslation('maroc')(maroc);
