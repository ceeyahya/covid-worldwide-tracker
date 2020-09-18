import { withTranslation } from '../i18n';

function Recommendations({ t }) {
  return (
    <ul className="grid grid-cols-1 gap-10 mx-auto mt-20 sm:gap-14 sm:grid-cols-2 lg:grid-cols-3">
      <li className="flex col-span-1 mx-auto">
        <div className="flex flex-col justify-center text-center">
          <img
            src="/images/recommendations/stayhome.svg"
            alt="medical mask"
            className="w-24 h-24 mx-auto"
          />
          <p className="mt-4 text-base font-semibold">
            {t("Stay at home whenever it's possible")}
          </p>
        </div>
      </li>
      <li className="flex col-span-1 mx-auto">
        <div className="flex flex-col justify-center text-center">
          <img
            src="/images/recommendations/medicalmask.svg"
            alt="medical mask"
            className="w-24 h-24 mx-auto"
          />
          <p className="mt-4 text-base font-semibold">{t('Wear your masks')}</p>
        </div>
      </li>
      <li className="flex col-span-1 mx-auto">
        <div className="flex flex-col justify-center text-center">
          <img
            src="/images/recommendations/nohandshake.svg"
            alt="medical mask"
            className="w-24 h-24 mx-auto"
          />
          <p className="mt-4 text-base font-semibold">
            {t('Avoid any unnecessary contact')}
          </p>
        </div>
      </li>
      <li className="flex col-span-1 mx-auto">
        <div className="flex flex-col justify-center text-center">
          <img
            src="/images/recommendations/handwashing.svg"
            alt="medical mask"
            className="w-24 h-24 mx-auto"
          />
          <p className="mt-4 text-base font-semibold">
            {t('Wash your hands regularly')}
          </p>
        </div>
      </li>
      <li className="flex col-span-1 mx-auto">
        <div className="flex flex-col justify-center text-center">
          <img
            src="/images/recommendations/nogroups.svg"
            alt="medical mask"
            className="w-24 h-24 mx-auto"
          />
          <p className="mt-4 text-base font-semibold">
            {t('Avoid large groups of people')}
          </p>
        </div>
      </li>
      <li className="flex col-span-1 mx-auto">
        <div className="flex flex-col justify-center text-center">
          <img
            src="/images/recommendations/attention.svg"
            alt="medical mask"
            className="w-24 h-24 mx-auto"
          />
          <p className="mt-4 text-base font-semibold">
            {t('Take the necessary precautions when you go out')}
          </p>
        </div>
      </li>
    </ul>
  );
}

export default withTranslation('recommendations')(Recommendations);
