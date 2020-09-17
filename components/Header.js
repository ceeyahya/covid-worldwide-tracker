import React, { useState } from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import { useContext } from 'react';
import { I18nContext } from 'next-i18next';
import { i18n, withTranslation } from '../i18n';

function Header({ t }) {
  const {
    i18n: { language },
  } = useContext(I18nContext);
  const [open, setOpen] = useState(false);
  const opened = classNames({ hidden: open, block: !open });
  const closed = classNames({ hidden: !open, block: open });
  const routes = [
    {
      path: '/a-propos',
      title: 'A propos',
    },
    {
      path: '/dashboard',
      title: 'Tous les pays',
    },
    {
      path: '/maroc',
      title: 'Maroc',
    },
  ];

  return (
    <nav>
      <div className="py-4 mx-auto max-w-7xl">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex items-center mr-2 -ml-2 md:hidden">
              <button
                onClick={() => setOpen(!open)}
                type="button"
                className="inline-flex items-center justify-center p-2 text-gray-900 transition duration-150 ease-in-out rounded-md hover:bg-gray-200 focus:outline-none focus:bg-gray-200"
              >
                <svg
                  className={classNames('h-6 w-6', opened)}
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  className={classNames('h-6 w-6', closed)}
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex items-center flex-shrink-0">
              <Link href="/">
                <a className="flex items-center">
                  <img
                    src="/images/virus.svg"
                    alt="COVID-19 Tracker Logo"
                    className="w-8 h-8 mr-2"
                  />
                  <h1 className="text-2xl font-black text-gray-900 ">
                    COVID-19 Tracker
                  </h1>
                </a>
              </Link>
            </div>
            <div className="hidden md:ml-6 md:flex md:items-center">
              {routes.map((route) => {
                return (
                  <Link href={route.path}>
                    <a className="py-2 ml-4 text-base font-medium leading-5 text-gray-800 transition duration-150 ease-in-out">
                      {route.title}
                    </a>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="flex items-center">
            <div className="hidden md:ml-4 md:flex-shrink-0 md:flex md:items-center">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://buymeacoffee.com/cyahya"
                type="button"
                className="flex items-center px-3 py-2 font-semibold text-white rounded-sm bg-bmc-orange"
              >
                <img
                  src="/images/buymeacoffeelogo.svg"
                  alt="Buy Me a Coffee"
                  className="w-8 h-8 mr-2"
                />
                {t('Support the Project')}
              </a>
              <div className="relative ml-3">
                <div>
                  <button
                    type="button"
                    onClick={() => setOpen(!open)}
                    className="flex text-sm transition duration-150 ease-in-out border-2 border-transparent rounded-full focus:outline-none focus:border-gray-700"
                  >
                    <svg
                      className="w-8 h-8 text-gray-900"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path
                        d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-2.29-2.333A17.9 17.9 0 0 1 8.027 13H4.062a8.008 8.008 0 0 0 5.648 6.667zM10.03 13c.151 2.439.848 4.73 1.97 6.752A15.905 15.905 0 0 0 13.97 13h-3.94zm9.908 0h-3.965a17.9 17.9 0 0 1-1.683 6.667A8.008 8.008 0 0 0 19.938 13zM4.062 11h3.965A17.9 17.9 0 0 1 9.71 4.333 8.008 8.008 0 0 0 4.062 11zm5.969 0h3.938A15.905 15.905 0 0 0 12 4.248 15.905 15.905 0 0 0 10.03 11zm4.259-6.667A17.9 17.9 0 0 1 15.973 11h3.965a8.008 8.008 0 0 0-5.648-6.667z"
                        fill="currentColor"
                      />
                    </svg>
                  </button>
                </div>

                {open && (
                  <div className="absolute right-0 z-10 w-48 mt-2 origin-top-right rounded-md shadow-lg">
                    <div className="py-1 bg-white rounded-md shadow-xs">
                      <button
                        onClick={() => i18n.changeLanguage('fr')}
                        className="block w-full px-4 py-2 text-base leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none"
                      >
                        Français
                      </button>
                      <button
                        onClick={() => i18n.changeLanguage('en')}
                        className="block w-full px-4 py-2 text-base leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none"
                      >
                        English
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={classNames(closed, 'md:hidden border border-gray-200 p-2')}
      >
        <div className="pt-2 pb-3 ">
          {routes.map((route) => {
            return (
              <Link href={route.path}>
                <a className="block px-3 py-2 mt-1 text-base font-medium text-gray-900 transition duration-150 ease-in-out">
                  {route.title}
                </a>
              </Link>
            );
          })}
        </div>
        <div className="pb-3 border-t border-gray-300 ">
          <div className="px-2 mt-3 sm:px-3">
            <button
              onClick={() => i18n.changeLanguage('en')}
              className="block w-full py-2 text-base font-medium text-gray-900 transition duration-150 ease-in-out"
            >
              Français
            </button>
            <button
              onClick={() => i18n.changeLanguage('ar')}
              className="block w-full py-2 text-base font-medium text-gray-900 transition duration-150 ease-in-out"
            >
              English
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default withTranslation('header')(Header);
