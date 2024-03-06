import React from 'react';

export const CursosPage = () => {
  return (
    <div className="flex flex-row min-h-screen bg-gray-100 text-gray-800">
      <main className="main flex flex-col flex-grow md:ml-0 transition-all duration-150 ease-in mx-auto">
        
        <div className="main-content flex flex-col flex-grow p-4">
          <h1 className="font-bold text-2xl text-gray-700">Cursos</h1>

          <div className="flex flex-col flex-grow rounded mt-4">
            <h1>Cursos Page in work!</h1>
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
};

export default CursosPage;
