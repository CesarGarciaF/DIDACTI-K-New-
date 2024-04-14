import React from 'react';
import { Card, Metric, Text, Button, Dialog, DialogPanel, DatePicker } from '@tremor/react';
import iconCFlenguajes from '../assets/iconCFlenguajes.svg';
import iconCFhumano from '../assets/iconCFhumano.svg';
import iconCFetica from '../assets/iconCFetica.svg';
import iconCFsaberes from '../assets/iconCFsaberes.svg';


export const PlaneacionesPage = () => {

  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="flex flex-row min-h-screen bg-gray-200 text-gray-1000 cont mt-2 mb-2">
      <main className="main flex flex-col flex-grow md:ml-0 transition-all duration-150 ease-in mx-auto bg-dark-tremor-brand-faint">
        <div className="main-content flex flex-col flex-grow p-4">
          <div className="flex flex-col flex-grow rounded mt-2">
            {/* Barra de busqueda */}
            <form>
              <div className="relative flex items-center">
                <input
                  type="search"
                  id="default-search"
                  className="ml-3 block w-full p-4 ps-10 text-sm text-gray-900 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder={"Search"}
                />
                <button type="submit" className="mb-1 text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
              </div>
            </form>
            {/* Cartas de Planeaciones */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-4 lg:gap-8 mt-4">

              {/* Card */}
              <a href="">
                <Card className="mx-auto max-w-lg" decoration="top" decorationColor="blue">
                  <div className="flex items-center justify-center h-55">
                    <img
                      className="hidden md:block object-cover w-full rounded-t-lg md:h-auto md:w-40 md:rounded-none md:rounded-s-lg"
                      src={iconCFlenguajes} alt=""
                    />
                  </div>
                  <p className="text-tremor text-tremor-content dark:text-dark-tremor-content text-white mt-2">Lenguajes</p>
                  <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content text-right">Planeaciones existentes:</p>
                  <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold text-right">743</p>
                </Card>
              </a>

              <a href="">
                {/* Card */}
                <Card className="mx-auto max-w-lg" decoration="top" decorationColor="orange">
                  <div className="flex items-center justify-center h-55">
                    <img
                      className="hidden md:block object-cover w-full rounded-t-lg md:h-auto md:w-40 md:rounded-none md:rounded-s-lg"
                      src={iconCFsaberes} alt="" />
                  </div>
                  <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content text-light mt-2">Saberes y pensamiento científico</p>
                  <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content text-right">Planeaciones existentes:</p>
                  <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold text-right">167</p>
                </Card>
              </a>

              <a href="">
                {/* Card */}
                <Card className="mx-auto max-w-lg" decoration="top" decorationColor="pink">
                  <div className="flex items-center justify-center h-55">
                    <img
                      className="hidden md:block object-cover w-full rounded-t-lg md:h-auto md:w-40 md:rounded-none md:rounded-s-lg"
                      src={iconCFhumano} alt="" />
                  </div>
                  <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content text-white mt-2">De lo humano y lo comunitario</p>
                  <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content text-right">Planeaciones existentes:</p>
                  <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold text-right">353</p>

                </Card>
              </a>

              <a href="">
                {/* Card */}
                <Card className="mx-auto max-w-lg" decoration="top" decorationColor="green">
                  <div className="flex items-center justify-center h-55">
                    <img
                      className="hidden md:block object-cover w-full rounded-t-lg md:h-auto md:w-40 md:rounded-none md:rounded-s-lg"
                      src={iconCFetica} alt="" />
                  </div>
                  <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content text-white mt-2">Ética, naturaleza y sociedades</p>
                  <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content text-right">Planeaciones existentes:</p>
                  <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold text-right">193</p>
                </Card>
              </a>



            </div>
            {/* Boton de crear Planeaciones */}
            <div className='mt-4'>
            <Button className="mx-auto block" onClick={() => setIsOpen(true)}>Crea tu Planeación!</Button>
              <Dialog open={isOpen} onClose={(val) => setIsOpen(val)} static={true}>
                <DialogPanel>
                  <form>
                    <h3 className="text-lg font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
                      Formulario de Planeaciones
                    </h3>
                    <div>
                      <p className="mt-2 leading-6 text-tremor-default text-tremor-content">
                        Fecha de Inicio
                      </p>
                      <DatePicker />
                      <p className="mt-2 leading-6 text-tremor-default text-tremor-content">
                        Fecha de Inicio
                      </p>
                      <DatePicker />
                    </div>

                    <Button className="mt-8 w-full" onClick={() => setIsOpen(false)}>
                      Crear Planeación
                    </Button>
                  </form>
                </DialogPanel>
              </Dialog>
            </div>
            {/* Final de Boton de crear Planeaciones */}
          </div>
        </div>
      </main>
    </div>
  )
}

export default PlaneacionesPage;