import { useQuery } from 'react-query';
import { QueryCache } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import LoadingSpinner from '../components/LoadingSpinner';

const fetchMoroccoData = async () => {
  const res = await fetch(
    'https://disease.sh/v3/covid-19/countries/MA?yesterday=false&strict=true'
  );
  const data = await res.json();
  return data;
};

function formatNumber(nbr) {
  return nbr.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export async function getServerSideProps(context) {
  const queryCache = new QueryCache();
  await queryCache.prefetchQuery('data', fetchMoroccoData);
  return {
    props: {
      dehydratedState: dehydrate(queryCache),
    },
  };
}

export default function maroc() {
  const { status, data, error } = useQuery('data', fetchMoroccoData);
  const getPercentagePopulation = () => {
    const percentage = (data.cases * 100) / data.population;
    return percentage.toFixed(2);
  };
  if (status === 'loading') return <LoadingSpinner />;
  if (status === 'error') return <div>{error}</div>;

  return (
    <div className="mt-12">
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

      <div class="mt-4 grid grid-cols-1 rounded-lg bg-white overflow-hidden shadow md:grid-cols-4">
        <div>
          <div class="px-4 py-5 sm:p-6">
            <dl>
              <dt class="text-base leading-6 font-normal text-gray-900">
                Total Cases
              </dt>
              <dd class="mt-1 flex justify-between items-baseline md:block lg:flex">
                <div class="flex items-baseline text-2xl leading-8 font-semibold text-blue-600">
                  {formatNumber(data.cases)}
                  <span class="ml-2 text-sm leading-5 font-medium text-gray-500">
                    from {formatNumber(data.population)}
                  </span>
                </div>
              </dd>
              <div class="inline-flex items-baseline px-3 py-1 rounded-sm font-normal text-sm leading-5 bg-blue-100 text-blue-800 md:mt-2">
                <svg
                  class="-ml-1 mr-1 flex-shrink-0 self-center h-4 w-4 text-blue-500 "
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
                {getPercentagePopulation()}% of the population
              </div>
            </dl>
          </div>
        </div>
        <div class="border-t border-gray-200 md:border-0 md:border-l">
          <div class="px-4 py-5 sm:p-6">
            <dl>
              <dt class="text-base leading-6 font-normal text-gray-900">
                Total Recovered
              </dt>
              <dd class="mt-1 flex justify-between items-baseline md:block lg:flex">
                <div class="flex items-baseline text-2xl leading-8 font-semibold text-blue-600">
                  {formatNumber(data.recovered)}
                  <span class="ml-2 text-sm leading-5 font-medium text-gray-500">
                    from {formatNumber(data.cases)}
                  </span>
                </div>
              </dd>
            </dl>
          </div>
        </div>
        <div class="border-t border-gray-200 md:border-0 md:border-l">
          <div class="px-4 py-5 sm:p-6">
            <dl>
              <dt class="text-base leading-6 font-normal text-gray-900">
                Total Deaths
              </dt>
              <dd class="mt-1 flex justify-between items-baseline md:block lg:flex">
                <div class="flex items-baseline text-2xl leading-8 font-semibold text-blue-600">
                  {formatNumber(data.deaths)}
                  <span class="ml-2 text-sm leading-5 font-medium text-gray-500">
                    from {formatNumber(data.cases)}
                  </span>
                </div>
              </dd>
            </dl>
          </div>
        </div>
        <div class="border-t border-gray-200 md:border-0 md:border-l">
          <div class="px-4 py-5 sm:p-6">
            <dl>
              <dt class="text-base leading-6 font-normal text-gray-900">
                Active Cases
              </dt>
              <dd class="mt-1 flex justify-between items-baseline md:block lg:flex">
                <div class="flex items-baseline text-2xl leading-8 font-semibold text-blue-600">
                  {formatNumber(data.active)}
                  <span class="ml-2 text-sm leading-5 font-medium text-gray-500">
                    from {formatNumber(data.cases)}
                  </span>
                </div>
              </dd>
            </dl>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h3 class="text-lg leading-6 font-semibold text-gray-900">
          Aujourd'hui
        </h3>
        <div class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
          <div class="bg-white overflow-hidden shadow rounded-lg">
            <div class="px-4 py-5 sm:p-6">
              <dl>
                <dt class="text-sm leading-5 font-medium text-gray-500 truncate">
                  Cases Today
                </dt>
                <dd class="mt-1 text-3xl leading-9 font-semibold text-gray-900">
                  {formatNumber(data.todayCases)}
                </dd>
              </dl>
            </div>
          </div>
          <div class="bg-white overflow-hidden shadow rounded-lg">
            <div class="px-4 py-5 sm:p-6">
              <dl>
                <dt class="text-sm leading-5 font-medium text-gray-500 truncate">
                  Recovered Today
                </dt>
                <dd class="mt-1 text-3xl leading-9 font-semibold text-gray-900">
                  {formatNumber(data.todayRecovered)}
                </dd>
              </dl>
            </div>
          </div>
          <div class="bg-white overflow-hidden shadow rounded-lg">
            <div class="px-4 py-5 sm:p-6">
              <dl>
                <dt class="text-sm leading-5 font-medium text-gray-500 truncate">
                  Deaths Today
                </dt>
                <dd class="mt-1 text-3xl leading-9 font-semibold text-gray-900">
                  {formatNumber(data.todayDeaths)}
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h3 class="text-lg leading-6 font-semibold text-gray-900">
          Plus d'informations
        </h3>
        <div class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
          <div class="bg-white overflow-hidden shadow rounded-lg">
            <div class="px-4 py-5 sm:p-6">
              <dl>
                <dt class="text-sm leading-5 font-medium text-gray-500 truncate">
                  Total Tests
                </dt>
                <dd class="mt-1 text-3xl leading-9 font-semibold text-gray-900">
                  {formatNumber(data.tests)}
                </dd>
              </dl>
            </div>
          </div>
          <div class="bg-white overflow-hidden shadow rounded-lg">
            <div class="px-4 py-5 sm:p-6">
              <dl>
                <dt class="text-sm leading-5 font-medium text-gray-500 truncate">
                  Critical Cases
                </dt>
                <dd class="mt-1 text-3xl leading-9 font-semibold text-gray-900">
                  {formatNumber(data.critical)}
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h3 class="text-lg leading-6 font-semibold text-gray-900">
          Proportions par Million
        </h3>
        <div class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
          <div class="bg-white overflow-hidden shadow rounded-lg">
            <div class="px-4 py-5 sm:p-6">
              <dl>
                <dt class="text-sm leading-5 font-medium text-gray-500 truncate">
                  Cases per million
                </dt>
                <dd class="mt-1 text-3xl leading-9 font-semibold text-gray-900">
                  {formatNumber(data.casesPerOneMillion)}
                </dd>
              </dl>
            </div>
          </div>
          <div class="bg-white overflow-hidden shadow rounded-lg">
            <div class="px-4 py-5 sm:p-6">
              <dl>
                <dt class="text-sm leading-5 font-medium text-gray-500 truncate">
                  Recovered per million
                </dt>
                <dd class="mt-1 text-3xl leading-9 font-semibold text-gray-900">
                  {formatNumber(data.recoveredPerOneMillion)}
                </dd>
              </dl>
            </div>
          </div>
          <div class="bg-white overflow-hidden shadow rounded-lg">
            <div class="px-4 py-5 sm:p-6">
              <dl>
                <dt class="text-sm leading-5 font-medium text-gray-500 truncate">
                  Deaths per million
                </dt>
                <dd class="mt-1 text-3xl leading-9 font-semibold text-gray-900">
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
