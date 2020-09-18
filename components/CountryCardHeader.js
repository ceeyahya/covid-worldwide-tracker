export default function CountryCardHeader({ flag, country, continent }) {
  return (
    <div className="flex items-center">
      <div className="flex-shrink-0 p-3">
        <img src={flag} alt="" className="w-12 h-8" />
      </div>
      <div className="flex-1 w-0 ml-5">
        <dl>
          <dt className="text-xl font-semibold leading-8 text-gray-900">
            {country}
          </dt>
          <dd className="flex items-baseline">
            <div className="text-sm font-medium leading-5 text-gray-500 truncate">
              {continent}
            </div>
          </dd>
        </dl>
      </div>
    </div>
  );
}
