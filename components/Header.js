import React, { useState } from 'react';
import classNames from 'classnames';
import Link from 'next/link';

export default function Header() {
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
      title: 'Dashboard',
    },
    {
      path: '/maroc',
      title: 'Maroc',
    },
  ];

  return (
    <nav>
      <div>
        <div className="flex items-center justify-between h-16 pt-4">
          <div className="flex">
            <div className="flex items-center mr-2 -ml-2 md:hidden">
              <button
                onClick={() => setOpen(!open)}
                type="button"
                className="inline-flex items-center justify-center p-2 text-gray-900 transition duration-150 ease-in-out rounded-md hover:bg-gray-200 hover:text-gray-900 focus:outline-none"
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
            <div>
              <div className="flex items-center flex-shrink-0">
                <h1 className="text-3xl font-extrabold text-gray-900 font-serif">
                  COVID-19 Tracker
                </h1>
              </div>
            </div>
            <div className="hidden md:ml-6 md:flex md:items-center">
              {routes.map((route) => {
                return (
                  <div>
                    <Link href="/">
                      <a className="ml-6 text-base font-medium leading-5 text-gray-900 list-none transition duration-150 ease-in-out focus:outline-none focus:text-yred-500">
                        {route.title}
                      </a>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div
        className={classNames(
          closed,
          'md:hidden bg-gray-50 rounded-lg shadow-md'
        )}
      >
        <div className="px-2 pt-2 pb-3 sm:px-3">
          {routes.map((route) => {
            return (
              <Link href={route.path}>
                <a className="block px-3 py-2 text-base font-medium text-gray-900 transition duration-150 ease-in-out focus:outline-none focus:text-gray-900">
                  {route.title}
                </a>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
