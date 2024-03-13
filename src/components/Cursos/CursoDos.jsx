import React from 'react';
import YoutubePlayer from 'react-player/youtube'

export const CursoDos = () => {
  return (
    <div className="flex flex-row min-h-screen bg-gray-100 text-gray-800">
      <main className="main flex flex-col flex-grow md:ml-0 transition-all duration-150 ease-in mx-auto">
        
        <div className="main-content flex flex-col flex-grow p-4">
          <h1 className="font-bold text-2xl text-gray-700">Cursos</h1>

          <div className="border rounded px-2 py-2 flex-col flex mt-1 items-start h-min container" 
            style={{background:"beige", width:"auto"}}>
          <YoutubePlayer url="https://www.youtube.com/watch?v=4fCp8H7Nv4k&list=PL3weZoli3qhCve5A_MiuEKEP9OX_91XBh"
          controls
          loop />
          </div>
          <div className='items-center justify-center container flex'>
            <h1 className='text-4xl font-bold border-b p-6'>Curso de suma de fracciones</h1>
          </div>
          <div className="p-6">
          <p className='text-gray-900 pb-3'>En este curso aprenderas...</p>
          </div>
        </div>
        <footer className="footer px-4 py-6">
          <div className="footer-content">
            <p className="text-sm text-gray-600 text-center">
              © Didacti-K 2024. All rights reserved.{" "}
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}
export default CursoDos;