import React from 'react'

export const CalendarPage = () => {
  return (
    <div class="flex flex-row min-h-screen bg-gray-100 text-gray-800">
      <main class="main flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in">
        
        <div class="main-content flex flex-col flex-grow p-4">
          <h1 class="font-bold text-2xl text-gray-700">Calendario</h1>

          <div class="flex flex-col flex-grow border-4 border-gray-400 border-dashed bg-white rounded mt-4"></div>
        </div>
        <footer class="footer px-4 py-6">
          <div class="footer-content">
            <p class="text-sm text-gray-600 text-center">
              © Brandname 2020. All rights reserved.{" "}
              <a href="https://twitter.com/iaminos">by iAmine</a>
            </p>
          </div>
        </footer>
      </main>
    </div>
  )
}
export default CalendarPage;