import { withTranslation } from '../i18n';

function Symptoms({ t }) {
  return (
    <div>
      <ul className="grid grid-cols-1 gap-10 mt-20 sm:gap-14 sm:grid-cols-2 lg:grid-cols-3">
        <li className="flex col-span-1 mx-auto">
          <div className="flex flex-col justify-center text-center">
            <img
              src="/images/symptoms/hightemperature.svg"
              alt=""
              className="w-24 h-24 mx-auto"
            />
            <p className="mt-4 text-base font-semibold">{t('Fever')}</p>
          </div>
        </li>
        <li className="flex col-span-1 mx-auto">
          <div className="flex flex-col justify-center text-center">
            <img
              src="/images/symptoms/cough.svg"
              alt=""
              className="w-24 h-24 mx-auto"
            />
            <p className="mt-4 text-base font-semibold">{t('Dry cough')}</p>
          </div>
        </li>
        <li className="flex col-span-1 mx-auto">
          <div className="flex flex-col justify-center text-center">
            <img
              src="/images/symptoms/lungs.svg"
              alt=""
              className="w-24 h-24 mx-auto"
            />
            <p className="mt-4 text-base font-semibold">
              {t('Breathing difficulties')}
            </p>
          </div>
        </li>
        <li className="flex col-span-1 mx-auto">
          <div className="flex flex-col justify-center text-center">
            <img
              src="/images/symptoms/fever.svg"
              alt=""
              className="w-24 h-24 mx-auto"
            />
            <p className="mt-4 text-base font-semibold">
              {t('Loss of smell and taste')}
            </p>
          </div>
        </li>
        <li className="flex col-span-1 mx-auto">
          <div className="flex flex-col justify-center text-center">
            <img
              src="/images/symptoms/dizziness.svg"
              alt=""
              className="w-24 h-24 mx-auto"
            />
            <p className="mt-4 text-base font-semibold">{t('Dizziness')}</p>
          </div>
        </li>

        <li className="flex col-span-1 mx-auto">
          <div className="flex flex-col justify-center text-center">
            <img
              src="/images/symptoms/tiredness.svg"
              alt=""
              className="w-24 h-24 mx-auto"
            />
            <p className="mt-4 text-base font-semibold">{t('Tiredness')}</p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default withTranslation('symptoms')(Symptoms);
