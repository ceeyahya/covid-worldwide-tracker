import { withTranslation } from '../i18n';

function Home({ t }) {
  return (
    <div>
      <main class="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
        <div class="text-center">
          <h2 class="text-4xl tracking-tighter leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
            Data to enrich your <br class="xl:hidden" />
            <span class="text-blue-500">online business</span>
          </h2>
          <p class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
          <div class="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div class="rounded-md shadow">
              <a
                href="#"
                class="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-500 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out"
              >
                Get started
              </a>
            </div>
            <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <a
                href="#"
                class="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-blue-600 bg-white hover:text-indigo-500 focus:outline-none focus:border-indigo-300 focus:shadow-outline-indigo transition duration-150 ease-in-out"
              >
                Live demo
              </a>
            </div>
          </div>
        </div>
      </main>
      <div className="mt-32">
        <h2 class="text-4xl tracking-tighter leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-4xl text-center">
          Data to enrich your online business
        </h2>
        <ul class="mt-20 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <li class="col-span-1 flex mx-auto">
            <img
              src="/images/recommendations/attention.svg"
              alt=""
              className="w-24 h-24"
            />
          </li>
          <li class="col-span-1 flex mx-auto">
            <img
              src="/images/recommendations/hand_washing.svg"
              alt=""
              className="w-24 h-24"
            />
          </li>
          <li class="col-span-1 flex mx-auto">
            <img
              src="/images/recommendations/medicalmask.svg"
              alt=""
              className="w-24 h-24"
            />
          </li>
          <li class="col-span-1 flex mx-auto">
            <img
              src="/images/recommendations/no_groups.svg"
              alt=""
              className="w-24 h-24"
            />
          </li>
          <li class="col-span-1 flex mx-auto">
            <img
              src="/images/recommendations/no_handshake.svg"
              alt=""
              className="w-24 h-24"
            />
          </li>
          <li class="col-span-1 flex mx-auto">
            <img
              src="/images/recommendations/stayhome.svg"
              alt=""
              className="w-24 h-24"
            />
          </li>
        </ul>
      </div>
      <div className="mt-32">
        <h2 class="text-4xl tracking-tighter leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-4xl text-center">
          Data to enrich your online business
        </h2>
        <ul class="mt-20 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <li class="col-span-1 flex mx-auto">
            <img
              src="/images/symptoms/cough.svg"
              alt=""
              className="w-24 h-24"
            />
          </li>
          <li class="col-span-1 flex mx-auto">
            <img
              src="/images/symptoms/dizziness.svg"
              alt=""
              className="w-24 h-24"
            />
          </li>
          <li class="col-span-1 flex mx-auto">
            <img
              src="/images/symptoms/fever.svg"
              alt=""
              className="w-24 h-24"
            />
          </li>
          <li class="col-span-1 flex mx-auto">
            <img
              src="/images/symptoms/high_temperature.svg"
              alt=""
              className="w-24 h-24"
            />
          </li>
          <li class="col-span-1 flex mx-auto">
            <img
              src="/images/symptoms/lungs.svg"
              alt=""
              className="w-24 h-24"
            />
          </li>
          <li class="col-span-1 flex mx-auto">
            <img
              src="/images/symptoms/tiredness.svg"
              alt=""
              className="w-24 h-24"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default withTranslation()(Home);
