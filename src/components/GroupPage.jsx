import React, { useState } from 'react';
import { FloatButton, Modal} from 'antd';
import { Select, SelectItem, TextInput} from '@tremor/react'

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
              <form className="w-full max-w-lg mx-auto mt-10 font-medium px-3 space-y-4">
                {/* Primeros dos campos (Fases y Materia) */}
                <div className='text-lg'>
                  <label className="text-tremor-content dark:text-dark-tremor-content w-50">Fases
                    <Select placeholder='Seleccione la fase'>
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="3">3</SelectItem>
                      <SelectItem value="4">4</SelectItem>
                      <SelectItem value="5">5</SelectItem>
                      <SelectItem value="6">6</SelectItem>
                    </Select>
                  </label>
                  <label className="text-tremor-content dark:text-dark-tremor-content w-50">Materia
                    <TextInput className="mx-auto max-w-xs" placeholder='Ingrese la materia' />
                  </label>
                </div>
                {/* Primeros dos campos (Fases y Materia) */}

                {/* Segundos dos campos (Grado y Escuela) */}
                <div className='text-lg'>
                  <label className="text-tremor-content dark:text-dark-tremor-content w-50">Grado
                    <Select placeholder='Seleccione el grado'>
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="3">3</SelectItem>
                      <SelectItem value="4">4</SelectItem>
                      <SelectItem value="5">5</SelectItem>
                      <SelectItem value="6">6</SelectItem>
                    </Select>
                  </label>

                  <label className="text-tremor-content dark:text-dark-tremor-content w-50">Escuela
                    <TextInput className="mx-auto max-w-xs" placeholder='Ingrese el nombre de la escuela' />
                  </label>
                </div>
                {/* Segundos dos campos (Grado y Escuela) */}

                {/* Campos Formativos */}
                <div className='text-lg'>
                  <label className="text-tremor-content dark:text-dark-tremor-content w-full">Campos Formativos
                    <Select placeholder='Seleccione uno'>
                      <SelectItem value="Le">Lenguajes</SelectItem>
                      <SelectItem value="Sa">Saberes y Pensamiento Científico</SelectItem>
                      <SelectItem value="Et">Ética, Naturaleza y Sociedades</SelectItem>
                      <SelectItem value="De">De lo Humano y lo Comunitario</SelectItem>
                    </Select>
                  </label>
                </div>
                {/* Campos Formativos */}

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
