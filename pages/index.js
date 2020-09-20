import loadable from '@loadable/component';
import { withTranslation } from '../i18n';
import Recommendations from '../components/Recommendations';
import Symptoms from '../components/Symptoms';

const WorldwideData = loadable(() => import('../components/WorldwideData'));

function Home({ t }) {
  return (
    <div className="mt-14">
      <h2 className="text-2xl font-extrabold leading-10 tracking-tighter text-center text-gray-900 sm:text-xl sm:leading-none md:text-4xl">
        {t('Current state of COVID-19 across the world')}
      </h2>
      <WorldwideData />
      <div className="mt-32">
        <h2 className="text-2xl font-extrabold leading-10 tracking-tighter text-center text-gray-900 sm:text-xl sm:leading-none md:text-4xl">
          {t(
            'If you feel any of these symptoms please seek medical attention, contact the nearest doctor/medical facility'
          )}{' '}
          <br className="block" />
          <span className="text-2xl font-normal text-gray-400 sm:text-2xl">
            (Allô Yakada: 080 100 47 47 / Allô SAMU: 141 )
          </span>
        </h2>
        <Symptoms />
      </div>
      <div className="mt-32 mb-32">
        <h2 className="text-2xl font-extrabold leading-10 tracking-tighter text-center text-gray-900 sm:text-xl sm:leading-none md:text-4xl">
          {t(
            'In order to neutralize the virus please follow the following recommendations'
          )}
        </h2>
        <Recommendations />
      </div>
    </div>
  );
}

export default withTranslation()(Home);
