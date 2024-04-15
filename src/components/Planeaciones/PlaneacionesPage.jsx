import React from 'react';
import { Card, Metric, Text, Button, Dialog, DialogPanel, DatePicker, TextInput } from '@tremor/react';
import iconCFlenguajes from '../../assets/iconCFlenguajes.svg';
import iconCFhumano from '../../assets/iconCFhumano.svg';
import iconCFetica from '../../assets/iconCFetica.svg';
import iconCFsaberes from '../../assets/iconCFsaberes.svg';
import { Select, SelectItem } from '@tremor/react';
import Astroboys from '../../assets/astroboys.jpg';



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
                <Select placeholder='Selecciona un campo formativo'>
                  <SelectItem value="1">Lenguajes</SelectItem>
                  <SelectItem value="2">Saberes y Pensamiento Científico</SelectItem>
                  <SelectItem value="3">De lo Humano y lo Comunitario</SelectItem>
                  <SelectItem value="4">Ética, Naturaleza y Sociedades</SelectItem>
                </Select>
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
                  <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content text-light mt-2">Saberes y Pensamiento Científico</p>
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
                  <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content text-white mt-2">De lo Humano y lo Comunitario</p>
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
                  <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content text-white mt-2">Ética, Naturaleza y Sociedades</p>
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

                    <div className='grid grid-cols-2 gap-4'>
                      <p className="mt-2 leading-6 text-tremor-default text-tremor-content">
                        Fecha de Inicio
                        <DatePicker />
                      </p>
                      <p className="mt-2 leading-6 text-tremor-default text-tremor-content">
                        Fecha de Inicio
                        <DatePicker />
                      </p>
                    </div>

                    <div className='grid grid-cols-2 gap-4'>
                      <p className="mt-2 leading-6 text-tremor-default text-tremor-content">
                        Sesiones (1-10)
                        <TextInput type='number' placeholder='Del 1 al 10...' className="mx-auto max-w-xs" />
                      </p>
                      <p className="mt-2 leading-6 text-tremor-default text-tremor-content">
                        Fases (1-6)
                        <TextInput type='number' placeholder='Del 1 al 6...' className="mx-auto max-w-xs" />
                      </p>
                    </div>

                    <div className=''>
                      <p className="mt-2 leading-6 text-tremor-default text-tremor-content">
                        Inicio
                        <TextInput placeholder='Comienza la planeación...' className="w-full h-12" />
                      </p>
                      <p className="mt-2 leading-6 text-tremor-default text-tremor-content">
                        Desarrollo
                        <TextInput placeholder='Describe que se hará...' className="w-full h-12 " />
                      </p>
                      <p className="mt-2 leading-6 text-tremor-default text-tremor-content">
                        Cierre
                        <TextInput placeholder='Detalla los pasos finales...' className="w-full h-12" />
                      </p>
                    </div>

                    <Button className="mt-8 w-full" onClick={() => setIsOpen(false)}>
                      Crear Planeación
                    </Button>
                  </form>
                </DialogPanel>
              </Dialog>
            </div>
            {/* Final de Boton de crear Planeaciones */}

            {/* Boton de Editar */}
            <div className='mt-4'>
              <Button className="mx-auto block" onClick={() => setIsOpen(true)}>Editar</Button>
              <Dialog open={isOpen} onClose={(val) => setIsOpen(val)} static={true}>
                <DialogPanel>
                  <form>
                    <h3 className="text-lg font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
                      Formulario de Planeaciones
                    </h3>

                    <div className='grid grid-cols-2 gap-4'>
                      <p className="mt-2 leading-6 text-tremor-default text-tremor-content">
                        Fecha de Inicio
                        <DatePicker />
                      </p>
                      <p className="mt-2 leading-6 text-tremor-default text-tremor-content">
                        Fecha de Inicio
                        <DatePicker />
                      </p>
                    </div>

                    <div className='grid grid-cols-2 gap-4'>
                      <p className="mt-2 leading-6 text-tremor-default text-tremor-content">
                        Sesiones (1-10)
                        <TextInput type='number' placeholder='Del 1 al 10...' className="mx-auto max-w-xs" />
                      </p>
                      <p className="mt-2 leading-6 text-tremor-default text-tremor-content">
                        Fases (1-6)
                        <TextInput type='number' placeholder='Del 1 al 6...' className="mx-auto max-w-xs" />
                      </p>
                    </div>

                    <div className=''>
                      <p className="mt-2 leading-6 text-tremor-default text-tremor-content">
                        Inicio
                        <TextInput placeholder='Comienza la planeación...' className="w-full h-12" />
                      </p>
                      <p className="mt-2 leading-6 text-tremor-default text-tremor-content">
                        Desarrollo
                        <TextInput placeholder='Describe que se hará...' className="w-full h-12 " />
                      </p>
                      <p className="mt-2 leading-6 text-tremor-default text-tremor-content">
                        Cierre
                        <TextInput placeholder='Detalla los pasos finales...' className="w-full h-12" />
                      </p>
                    </div>

                    <Button className="mt-8 w-full" onClick={() => setIsOpen(false)}>
                      Guardar cambios
                    </Button>
                  </form>
                </DialogPanel>
              </Dialog>
            </div>

            <div className="container mx-auto flex flex-wrap">

              <div className="w-full md:w-1/3 lg:w-1/3 p-2">
                <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl">
                  <div className="relative h-56 mx-4 mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                    <img src={Astroboys} alt="image" />
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-2">
                      <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                        <span className="font-bold">Numero de fases:</span> 10
                      </p>
                      <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                        <span className="font-bold">Numero de sesiones:</span> 12
                      </p>
                      <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                        <span className="font-bold">Inicia:</span> 22 / 10 / 2023
                      </p>
                      <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                        <span className="font-bold">Termina:</span> 22 / 10 / 2024
                      </p>
                    </div>
                  </div>
                  <div className="p-6 pt-0 flex justify-end">
                    <div>
                      <button
                        className="m-2 align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-red-600 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                        type="button"
                      >
                        Eliminar
                      </button>
                      <button
                        className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-blue-600 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                        type="button"
                        onClick={() => setIsOpen(true)}
                      >
                        Editar
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/3 lg:w-1/3 p-2">
                <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl">
                  <div className="relative h-56 mx-4 mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                    <img src={Astroboys} alt="image" />
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-2">
                      <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                        <span className="font-bold">Numero de fases:</span> 10
                      </p>
                      <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                        <span className="font-bold">Numero de sesiones:</span> 12
                      </p>
                      <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                        <span className="font-bold">Inicia:</span> 22 / 10 / 2023
                      </p>
                      <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                        <span className="font-bold">Termina:</span> 22 / 10 / 2024
                      </p>
                    </div>
                  </div>
                  <div className="p-6 pt-0 flex justify-end">
                    <div>
                      <button
                        className="m-2 align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-red-600 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                        type="button"
                      >
                        Eliminar
                      </button>
                      <button
                        className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-blue-600 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                        type="button"
                        onClick={() => setIsOpen(true)}
                      >
                        Editar
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/3 lg:w-1/3 p-2">
                <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl">
                  <div className="relative h-56 mx-4 mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                    <img src={Astroboys} alt="image" />
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-2">
                      <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                        <span className="font-bold">Numero de fases:</span> 10
                      </p>
                      <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                        <span className="font-bold">Numero de sesiones:</span> 12
                      </p>
                      <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                        <span className="font-bold">Inicia:</span> 22 / 10 / 2023
                      </p>
                      <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                        <span className="font-bold">Termina:</span> 22 / 10 / 2024
                      </p>
                    </div>
                  </div>
                  <div className="p-6 pt-0 flex justify-end">
                    <div>
                      <button
                        className="m-2 align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-red-600 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                        type="button"
                      >
                        Eliminar
                      </button>
                      <button
                        className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-blue-600 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                        type="button"
                        onClick={() => setIsOpen(true)}
                      >
                        Editar
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/3 lg:w-1/3 p-2">
                <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl">
                  <div className="relative h-56 mx-4 mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                    <img src={Astroboys} alt="image" />
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-2">
                      <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                        <span className="font-bold">Numero de fases:</span> 10
                      </p>
                      <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                        <span className="font-bold">Numero de sesiones:</span> 12
                      </p>
                      <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                        <span className="font-bold">Inicia:</span> 22 / 10 / 2023
                      </p>
                      <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                        <span className="font-bold">Termina:</span> 22 / 10 / 2024
                      </p>
                    </div>
                  </div>
                  <div className="p-6 pt-0 flex justify-end">
                    <div>
                      <button
                        className="m-2 align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-red-600 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                        type="button"
                      >
                        Eliminar
                      </button>
                      <button
                        className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-blue-600 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                        type="button"
                        onClick={() => setIsOpen(true)}
                      >
                        Editar
                      </button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default PlaneacionesPage;