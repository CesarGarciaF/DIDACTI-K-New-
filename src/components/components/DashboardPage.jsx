import React, { useState, useRef } from "react";
import { BarList, Card } from "@tremor/react";
import { Carousel } from "antd";
import astroboys from "../../assets/astroboys.jpg";
import LogoSolo from "../../assets/LogoAloneBlue.png";
import Usuario from "../../assets/user.png";
import { Link } from "react-router-dom";

const data = [
  {
    name: "Planeaciones",
    value: 47,
    href: "https://twitter.com/tremorlabs",
    icon: function TwitterIcon() {
      return <img src={LogoSolo} className="w-6 h-6 mr-2" />;
    },
  },
  {
    name: "Grupos",
    value: 87,
    href: "https://google.com",
    icon: function GoogleIcon() {
      return <img src={Usuario} className="w-6 h-6 mr-2" />;
    },
  },
];

export default function DashboardPage() {
  // const { logout } = useAuth();
  return (
    <div className="flex flex-row bg-gray-100">
      <main className="main flex flex-col flex-grow md:ml-0 transition-all duration-150 ease-in mx-auto">
        <div className="main-content flex flex-col flex-grow p-4">
          <div className="flex flex-col flex-grow rounded mt-1">
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:gap-8">
              {/*Carrusel*/}
              {/* <div className="col-span-3">
                <Carousel autoplay className="overflow-hidden rounded-lg">
                  <div>
                    <img
                      src={astroboys}
                      alt="Bob y Patricio"
                      className="w-full max-h-96"
                    />
                  </div>
                  <div>
                    <img
                      src={astroboys}
                      alt="Bob y Patricio"
                      className="w-full max-h-96"
                    />
                  </div>
                  <div>
                    <img
                      src={astroboys}
                      alt="Bob y Patricio"
                      className="w-full max-h-96"
                    />
                  </div>
                  <div>
                    <img
                      src={astroboys}
                      alt="Bob y Patricio"
                      className="w-full max-h-96"
                    />
                  </div>
                </Carousel>
              </div> */}
              {/*Carrusel*/}

              {/* Card */}
              <div className="flex flex-col overflow-hidden rounded-lg bg-gray shadow-sm dark:bg-gray-800 dark:text-gray-100">
                {/* Body */}
                <div className="flex grow items-center justify-between p-5">
                  <dl className="space-y-1">
                    <dt className="text-2xl font-bold">146</dt>
                    <dd className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                      Planeaciones
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
                  href="planeaciones"
                  className="block bg-gray-50 p-3 text-center text-sm font-medium text-blue-600 hover:bg-gray-100 hover:bg-opacity-75 hover:text-blue-700 active:bg-gray-50 dark:bg-gray-900/50 dark:text-blue-400 dark:hover:bg-gray-900/75 dark:hover:text-blue-300 dark:active:bg-gray-900/50"
                >
                  Ver todas las Planeaciones...
                </a>
                {/* END Action Link */}
              </div>
              {/* END Card */}

              {/* Card */}
              <div className="flex flex-col overflow-hidden rounded-lg bg-gray shadow-sm dark:bg-gray-800 dark:text-gray-100">
                {/* Body */}
                <div className="flex grow items-center justify-between p-5">
                  <dl className="space-y-1">
                    <dt className="text-2xl font-bold">89</dt>
                    <dd className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                      Actividades
                    </dd>
                  </dl>
                  <div className="inline-flex items-center space-x-1 rounded-full bg-green-200 px-2 py-1 text-sm font-semibold leading-4 text-green-800">
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
                <Link
                  to="planeaciones"
                  className="block bg-gray-50 p-3 text-center text-sm font-medium text-blue-600 hover:bg-gray-100 hover:bg-opacity-75 hover:text-blue-700 active:bg-gray-50 dark:bg-gray-900/50 dark:text-blue-400 dark:hover:bg-gray-900/75 dark:hover:text-blue-300 dark:active:bg-gray-900/50"
                >
                  Ver todas las Actividades...
                </Link>
                {/* END Action Link */}
              </div>
              {/* END Card */}
            </div>

            {/* <h3 className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
              Newsletter Revenue
            </h3>
            <p className="text-tremor-metric text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">
              $34,567
            </p> */}
            <Card className="mt-4 h-90">
              <h3 className="text-tremor-title text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium">
                Proyectos creados
              </h3>
              <p className="mt-4 text-tremor-default flex items-center justify-between text-tremor-content dark:text-dark-tremor-content">
                <span>Fuentes</span>
                <span>Subidas</span>
              </p>
              <BarList data={data} className="mt-2" />
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
