import React, { useState, useRef } from "react";
import { AreaChart } from "@tremor/react";

const chartdata = [
  {
    date: 'Jan 22',
    SemiAnalysis: 2890,
    'The Pragmatic Engineer': 2338,
  },
  {
    date: 'Feb 22',
    SemiAnalysis: 2756,
    'The Pragmatic Engineer': 2103,
  },
  {
    date: 'Mar 22',
    SemiAnalysis: 3322,
    'The Pragmatic Engineer': 2194,
  },
  {
    date: 'Apr 22',
    SemiAnalysis: 3470,
    'The Pragmatic Engineer': 2108,
  },
  {
    date: 'May 22',
    SemiAnalysis: 3475,
    'The Pragmatic Engineer': 1812,
  },
  {
    date: 'Jun 22',
    SemiAnalysis: 3129,
    'The Pragmatic Engineer': 1726,
  },
  {
    date: 'Jul 22',
    SemiAnalysis: 3490,
    'The Pragmatic Engineer': 1982,
  },
  {
    date: 'Aug 22',
    SemiAnalysis: 2903,
    'The Pragmatic Engineer': 2012,
  },
  {
    date: 'Sep 22',
    SemiAnalysis: 2643,
    'The Pragmatic Engineer': 2342,
  },
  {
    date: 'Oct 22',
    SemiAnalysis: 2837,
    'The Pragmatic Engineer': 2473,
  },
  {
    date: 'Nov 22',
    SemiAnalysis: 2954,
    'The Pragmatic Engineer': 3848,
  },
  {
    date: 'Dec 22',
    SemiAnalysis: 3239,
    'The Pragmatic Engineer': 3736,
  },
];

const valueFormatter = function (number) {
  return '$ ' + new Intl.NumberFormat('us').format(number).toString();
};


export default function DashboardPage() {
  // const { logout } = useAuth();
  return (
    <div className="flex flex-row min-h-screen bg-gray-200 text-gray-1000 cont mt-14 mb-4">
      <main className="main flex flex-col flex-grow md:ml-0 transition-all duration-150 ease-in mx-auto">
        <div className="main-content flex flex-col flex-grow p-4">

          <div className="flex flex-col flex-grow rounded mt-4 bg-dark-tremor-brand-faint">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-8">
              {/* Card */}
              <div className="flex flex-col overflow-hidden rounded-lg bg-gray shadow-sm dark:bg-gray-800 dark:text-gray-100">
                {/* Body */}
                <div className="flex grow items-center justify-between p-5">
                  <dl className="space-y-1">
                    <dt className="text-2xl font-bold">146</dt>
                    <dd className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                      VENTAS
                    </dd>
                  </dl>
                  <div className="inline-flex items-center space-x-1 rounded-full bg-emerald-200 px-2 py-1 text-sm font-semibold leading-4 text-emerald-800">
                    <svg
                      className="hi-solid hi-arrow-circle-up inline-block size-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>7.9%</span>
                  </div>
                </div>
                {/* END Body */}

                {/* Action Link */}
                <a
                  href="#"
                  className="block bg-gray-50 p-3 text-center text-sm font-medium text-blue-600 hover:bg-gray-100 hover:bg-opacity-75 hover:text-blue-700 active:bg-gray-50 dark:bg-gray-900/50 dark:text-blue-400 dark:hover:bg-gray-900/75 dark:hover:text-blue-300 dark:active:bg-gray-900/50"
                >
                  Ver todas las Ventas...
                </a>
                {/* END Action Link */}
              </div>
              {/* END Card */}

              {/* Card */}
              <div className="flex flex-col overflow-hidden rounded-lg bg-gray shadow-sm dark:bg-gray-800 dark:text-gray-100">
                {/* Body */}
                <div className="flex grow items-center justify-between p-5">
                  <dl className="space-y-1">
                    <dt className="text-2xl font-bold">$5,128</dt>
                    <dd className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                      Ganancias
                    </dd>
                  </dl>
                  <div className="inline-flex items-center space-x-1 rounded-full bg-rose-200 px-2 py-1 text-sm font-semibold leading-4 text-rose-800">
                    <svg
                      className="hi-solid hi-arrow-circle-down inline-block size-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>6.9%</span>
                  </div>
                </div>
                {/* END Body */}

                {/* Action Link */}
                <a
                  href="#"
                  className="block bg-gray-50 p-3 text-center text-sm font-medium text-blue-600 hover:bg-gray-100 hover:bg-opacity-75 hover:text-blue-700 active:bg-gray-50 dark:bg-gray-900/50 dark:text-blue-400 dark:hover:bg-gray-900/75 dark:hover:text-blue-300 dark:active:bg-gray-900/50"
                >
                  Ver todas las Ganancias...
                </a>
                {/* END Action Link */}
              </div>
              {/* END Card */}

              {/* Card */}
              <div className="flex flex-col overflow-hidden rounded-lg bg-gray shadow-sm dark:bg-gray-800 dark:text-gray-100">
                {/* Body */}
                <div className="flex grow items-center justify-between p-5">
                  <dl className="space-y-1">
                    <dt className="text-2xl font-bold">$2,670</dt>
                    <dd className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                      BOLSA
                    </dd>
                  </dl>
                  <div className="inline-flex items-center space-x-1 rounded-full bg-emerald-200 px-2 py-1 text-sm font-semibold leading-4 text-emerald-800">
                    <svg
                      className="hi-solid hi-arrow-circle-up inline-block size-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>5.6%</span>
                  </div>
                </div>
                {/* END Body */}

                {/* Action Link */}
                <a
                  href="#"
                  className="block bg-gray-50 p-3 text-center text-sm font-medium text-blue-600 hover:bg-gray-100 hover:bg-opacity-75 hover:text-blue-700 active:bg-gray-50 dark:bg-gray-900/50 dark:text-blue-400 dark:hover:bg-gray-900/75 dark:hover:text-blue-300 dark:active:bg-gray-900/50"
                >
                  Monitorea tus inversiones...
                </a>
                {/* END Action Link */}
              </div>
              {/* END Card */}
            </div>
            <h3 className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">Newsletter Revenue</h3>
            <p className="text-tremor-metric text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">$34,567</p>
            <AreaChart
              className="mt-4 h-72"
              data={chartdata}
              index="date"
              yAxisWidth={65}
              categories={['SemiAnalysis', 'The Pragmatic Engineer']}
              colors={['indigo', 'cyan']}
              valueFormatter={valueFormatter}
            />


          </div>
        </div>
      </main>
    </div>
  );
}
