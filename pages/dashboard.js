import { useQuery } from 'react-query';

const fetchAllData = async () => {
  const res = await fetch('https://disease.sh/v3/covid-19/countries');
  const data = await res.json();
  return data;
};

export default function dashboard() {
  const { status, data, error } = useQuery('latest', fetchAllData);
  if (status === 'loading') return <div>Loading...please wait</div>;
  if (status === 'error') return <div>{error}</div>;

  return (
    <div>
      <div>
        <label
          for="account_number"
          class="block text-sm font-medium leading-5 text-gray-700"
        >
          Search
        </label>
        <div class="mt-1 relative rounded-md shadow-sm">
          <input
            id="country_continent"
            class="form-input block w-full pr-10 sm:text-sm sm:leading-5"
            placeholder="Morocco or Africa..."
          />
        </div>
        <p className="px-2 mt-1 text-sm text-gray-500">
          Possibilite de recherche par pays ou par continent
        </p>
      </div>
      <div class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((item) => {
          return (
            <div class="bg-white overflow-hidden shadow rounded-lg">
              <div class="px-4 py-5 sm:p-6">
                <div class="flex items-center">
                  <div class="flex-shrink-0 p-3">
                    <img
                      src={item.countryInfo.flag}
                      alt=""
                      className="w-12 h-8"
                    />
                  </div>
                  <div class="ml-5 w-0 flex-1">
                    <dl>
                      <dt class="text-xl leading-8 font-semibold text-gray-900">
                        {item.country}
                      </dt>
                      <dd class="flex items-baseline">
                        <div class="text-sm leading-5 font-medium text-gray-500 truncate">
                          {item.continent}
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div class="px-4 py-4 sm:px-6">
                <ul class="grid gap-4 grid-cols-3">
                  <li class="col-span-1 bg-white">
                    <div className="flex flex-col text-center">
                      <h3 className="text-lg font-semibold">{item.cases}</h3>
                      <p className="text-base text-gray-500">Cases</p>
                    </div>
                  </li>
                  <li class="col-span-1 bg-white">
                    <div className="flex flex-col text-center">
                      <h3 className="text-lg font-semibold">
                        {item.recovered}
                      </h3>
                      <p className="text-base text-gray-500">Recovered</p>
                    </div>
                  </li>
                  <li class="col-span-1 bg-white">
                    <div className="flex flex-col text-center">
                      <h3 className="text-lg font-semibold">{item.deaths}</h3>
                      <p className="text-base text-gray-500">Deaths</p>
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
