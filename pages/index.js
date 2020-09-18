import { useQuery } from 'react-query';
import { QueryCache } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import { withTranslation } from '../i18n';
import { formatNumber } from '../utils/formatNumber';
import Recommendations from '../components/Recommendations';
import Symptoms from '../components/Symptoms';
import LoadingSpinner from '../components/LoadingSpinner';

const fetchGlobalData = async () => {
  const res = await fetch(
    'https://disease.sh/v3/covid-19/all?yesterday=false&twoDaysAgo=false&allowNull=true'
  );
  const data = await res.json();
  return data;
};

export async function getServerSideProps(context) {
  const queryCache = new QueryCache();
  await queryCache.prefetchQuery('data', fetchGlobalData);
  return {
    props: {
      dehydratedState: dehydrate(queryCache),
    },
  };
}

function Home({ t }) {
  const { status, data, error } = useQuery('data', fetchGlobalData);
  if (status === 'loading') return <LoadingSpinner />;
  if (status === 'error') return <div>{error}</div>;

  return (
    <div className="mt-14">
      <h2 className="text-2xl font-extrabold leading-10 tracking-tighter text-center text-gray-900 sm:text-xl sm:leading-none md:text-4xl">
        {t('Current state of COVID-19 across the world')}
      </h2>
      <div className="grid grid-cols-1 mt-12 overflow-hidden bg-white rounded-lg shadow md:grid-cols-4">
        <div>
          <div className="px-4 py-5 sm:p-6">
            <dl>
              <dt className="text-base font-normal leading-6 text-gray-900">
                {t('Global Cases')}
              </dt>
              <dd className="flex items-baseline justify-between mt-1 md:block lg:flex">
                <div className="flex items-baseline text-2xl font-semibold leading-8 text-blue-600 md:block">
                  {formatNumber(data.cases)} <br />
                  <span className="ml-1 text-sm font-medium leading-5 text-gray-500">
                    {t('from')} {formatNumber(data.population)}
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
                {t('Global Recoveries')}
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
                {t('Global Deaths')}
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
                {t('Global Active Cases')}
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
      <div className="mt-32">
        <h2 className="text-2xl font-extrabold leading-10 tracking-tighter text-center text-gray-900 sm:text-xl sm:leading-none md:text-4xl">
          {t(
            'In order to neutralize the virus please follow the following recommendations'
          )}
        </h2>
        <Recommendations />
      </div>
      <div className="mt-32 mb-32">
        <h2 className="text-2xl font-extrabold leading-10 tracking-tighter text-center text-gray-900 sm:text-xl sm:leading-none md:text-4xl">
          {t(
            'If you feel any of these symptoms please seek medical attention, contact the nearest doctor/medical facility'
          )}
        </h2>
        <Symptoms />
      </div>
    </div>
  );
}

export default withTranslation()(Home);
