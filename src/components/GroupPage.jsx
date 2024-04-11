import React, { useState } from 'react';
import { FloatButton, Modal } from 'antd';
import { Select, SelectItem, TextInput } from '@tremor/react'

export const GroupPage = () => {
  const [open, setOpen] = useState(false);

  const handleSave = () => {
    // Lógica para guardar la información
    setOpen(false);
  };

  return (
    <div className="flex flex-row min-h-screen bg-gray-100 text-gray-800">
      <main className="main flex flex-col flex-grow md:ml-0 transition-all duration-150 ease-in mx-auto">
        <div className="main-content flex flex-col flex-grow p-4">
          <h1 className="font-bold text-2xl text-gray-700">Grupos</h1>
          <div className="flex flex-col flex-grow rounded mt-4 ">
            {/* Boton con formulario flotante */}
            <FloatButton onClick={() => setOpen(true)} tooltip="Crear Grupo" />
            <Modal
              centered
              open={open}
              onCancel={() => setOpen(false)}
              footer={[
                <button key="save" onClick={handleSave} className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  Guardar
                </button>
              ]}
            >
              <h1 className="font-bold text-2xl text-gray-700">Crear grupo</h1>
              {/* Formulario */}
              <form className="w-full max-w-lg">
                <div className="flex flex-wrap -mx-3 mb-6 mt-3">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                      Fases de grupo
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Fases" />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                      Grado de grupo
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Grado" />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 ">
                  <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                      Escuela
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="Universidad Tecnologica del sur de Sonora" />
                  </div>
                  <div className="w-full px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                      Campos formativos
                    </label>
                    <div className="relative">
                      <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                        <option>Lenguajes</option>
                        <option>Saberes y pensamienro cientifico</option>
                        <option>De lo humano y lo comunitario</option>
                        <option>Etica , naturaleza y  sociedades</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      </div>
                    </div>
                  </div>
                </div>
              </form>
              {/* Formulario */}
            </Modal>
            {/* Boton con formulario flotante */}
          </div>
        </div>
      </main>
    </div>
  )
}
export default GroupPage;
