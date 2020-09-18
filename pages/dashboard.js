import { useState } from 'react';
import Fuse from 'fuse.js';
import { useQuery } from 'react-query';
import { QueryCache } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import { formatNumber } from '../utils/formatNumber';
import { withTranslation } from '../i18n';
import LoadingSpinner from '../components/LoadingSpinner';

const fetchAllData = async () => {
  const res = await fetch('https://disease.sh/v3/covid-19/countries');
  const data = await res.json();
  return data;
};

export async function getServerSideProps(context) {
  const queryCache = new QueryCache();
  await queryCache.prefetchQuery('data', fetchAllData);
  return {
    props: {
      dehydratedState: dehydrate(queryCache),
    },
  };
}

function dashboard({ t }) {
  const { status, data, error } = useQuery('data', fetchAllData);
  const fuse = new Fuse(data, {
    keys: ['country', 'continent'],
  });
  const [search, setSearch] = useState('');

  const results = fuse.search(search);
  const countryResults = search ? results.map((country) => country.item) : data;

  function handleChange({ currentTarget = {} }) {
    const { value } = currentTarget;
    setSearch(value);
  }

  if (status === 'loading') return <LoadingSpinner />;
  if (status === 'error') return <div>{error}</div>;

  return (
    <div>
      <div>
        <label
          htmlFor="search"
          className="block text-base font-semibold leading-5 text-gray-700"
        >
          {t('Search')}
        </label>
        <div className="relative mt-1 rounded-md shadow-sm">
          <input
            value={search}
            onChange={handleChange}
            id="country_continent"
            className="block w-full pr-10 form-input sm:text-sm sm:leading-5"
            placeholder="Morocco or Africa..."
          />
        </div>
        <p className="px-2 mt-1 text-sm text-gray-500">
          {t('Search by country or continent')}
        </p>
      </div>
      <div className="grid grid-cols-1 gap-5 mt-5 mb-16 lg:mb-24 sm:grid-cols-2 lg:grid-cols-3">
        {countryResults
          .filter((o) => o.countryInfo._id != 732)
          .map((data) => {
            return (
              <div className="overflow-hidden bg-white rounded-lg shadow">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 p-3">
                      <img
                        src={data.countryInfo.flag}
                        alt=""
                        className="w-12 h-8"
                      />
                    </div>
                    <div className="flex-1 w-0 ml-5">
                      <dl>
                        <dt className="text-xl font-semibold leading-8 text-gray-900">
                          {data.country}
                        </dt>
                        <dd className="flex items-baseline">
                          <div className="text-sm font-medium leading-5 text-gray-500 truncate">
                            {data.continent}
                          </div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-4 sm:px-6">
                  <ul className="grid grid-cols-3 gap-4">
                    <li className="col-span-1 bg-white">
                      <div className="flex flex-col text-center">
                        <h3 className="text-lg font-semibold">
                          {formatNumber(data.cases)}
                        </h3>
                        <p className="text-base text-gray-500">{t('Cases')}</p>
                      </div>
                    </li>
                    <li className="col-span-1 bg-white">
                      <div className="flex flex-col text-center">
                        <h3 className="text-lg font-semibold">
                          {formatNumber(data.recovered)}
                        </h3>
                        <p className="text-base text-gray-500">
                          {t('Recovered')}
                        </p>
                      </div>
                    </li>
                    <li className="col-span-1 bg-white">
                      <div className="flex flex-col text-center">
                        <h3 className="text-lg font-semibold">
                          {formatNumber(data.deaths)}
                        </h3>
                        <p className="text-base text-gray-500">{t('Deaths')}</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default withTranslation('dashboard')(dashboard);
