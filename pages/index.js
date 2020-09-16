import { withTranslation } from '../i18n';

function Home({ t }) {
  return (
    <div>
      <main class="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 xl:mt-28">
        <div class="text-center">
          <h2 class="text-4xl tracking-tighter leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
            Data to enrich your <br class="xl:hidden" />
            <span class="text-indigo-600">online business</span>
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
                class="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out"
              >
                Get started
              </a>
            </div>
            <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <a
                href="#"
                class="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-500 focus:outline-none focus:border-indigo-300 focus:shadow-outline-indigo transition duration-150 ease-in-out"
              >
                Live demo
              </a>
            </div>
          </div>
        </div>
      </main>
      <div class="py-16 overflow-hidden lg:py-24">
        <div class="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl">
          <div class="relative">
            <h3 class="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
              A better way to send money
            </h3>
            <p class="mt-4 max-w-3xl mx-auto text-center text-xl leading-7 text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              magnam voluptatum cupiditate veritatis in, accusamus quisquam.
            </p>
          </div>

          <div class="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h4 class="text-2xl leading-8 font-extrabold text-gray-900 tracking-tight sm:text-3xl sm:leading-9">
                Transfer funds world-wide
              </h4>
              <p class="mt-3 text-lg leading-7 text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur minima sequi recusandae, porro maiores officia
                assumenda aliquam laborum ab aliquid veritatis impedit odit
                adipisci optio iste blanditiis facere. Totam, velit.
              </p>

              <ul class="mt-10">
                <li>
                  <div class="flex">
                    <div class="ml-4">
                      <h5 class="text-lg leading-6 font-medium text-gray-900">
                        Competitive exchange rates
                      </h5>
                      <p class="mt-2 text-base leading-6 text-gray-500">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Maiores impedit perferendis suscipit eaque, iste
                        dolor cupiditate blanditiis ratione.
                      </p>
                    </div>
                  </div>
                </li>
                <li class="mt-10">
                  <div class="flex">
                    <div class="ml-4">
                      <h5 class="text-lg leading-6 font-medium text-gray-900">
                        No hidden fees
                      </h5>
                      <p class="mt-2 text-base leading-6 text-gray-500">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Maiores impedit perferendis suscipit eaque, iste
                        dolor cupiditate blanditiis ratione.
                      </p>
                    </div>
                  </div>
                </li>
                <li class="mt-10">
                  <div class="flex">
                    <div class="ml-4">
                      <h5 class="text-lg leading-6 font-medium text-gray-900">
                        Transfers are instant
                      </h5>
                      <p class="mt-2 text-base leading-6 text-gray-500">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Maiores impedit perferendis suscipit eaque, iste
                        dolor cupiditate blanditiis ratione.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div class="mt-10 -mx-4 relative lg:mt-0">
              <img
                class="relative mx-auto"
                width="490"
                src="https://tailwindui.com/img/features/feature-example-1.png"
                alt=""
              />
            </div>
          </div>

          <div class="relative mt-12 sm:mt-16 lg:mt-24">
            <div class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div class="lg:col-start-2">
                <h4 class="text-2xl leading-8 font-extrabold text-gray-900 tracking-tight sm:text-3xl sm:leading-9">
                  Always in the loop
                </h4>
                <p class="mt-3 text-lg leading-7 text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit ex obcaecati natus eligendi delectus, cum deleniti
                  sunt in labore nihil quod quibusdam expedita nemo.
                </p>

                <ul class="mt-10">
                  <li>
                    <div class="flex">
                      <div class="ml-4">
                        <h5 class="text-lg leading-6 font-medium text-gray-900">
                          Mobile notifications
                        </h5>
                        <p class="mt-2 text-base leading-6 text-gray-500">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Maiores impedit perferendis suscipit eaque, iste
                          dolor cupiditate blanditiis ratione.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li class="mt-10">
                    <div class="flex">
                      <div class="ml-4">
                        <h5 class="text-lg leading-6 font-medium text-gray-900">
                          Reminder emails
                        </h5>
                        <p class="mt-2 text-base leading-6 text-gray-500">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Maiores impedit perferendis suscipit eaque, iste
                          dolor cupiditate blanditiis ratione.
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              <div class="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
                <svg
                  class="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
                  width="784"
                  height="404"
                  fill="none"
                  viewBox="0 0 784 404"
                >
                  <defs>
                    <pattern
                      id="e80155a9-dfde-425a-b5ea-1f6fadd20131"
                      x="0"
                      y="0"
                      width="20"
                      height="20"
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        x="0"
                        y="0"
                        width="4"
                        height="4"
                        class="text-gray-200"
                        fill="currentColor"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width="784"
                    height="404"
                    fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)"
                  />
                </svg>
                <img
                  class="relative mx-auto"
                  width="490"
                  src="https://tailwindui.com/img/features/feature-example-2.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withTranslation()(Home);
