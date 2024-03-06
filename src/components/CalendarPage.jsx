import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

export const CalendarPage = () => {
  return (
    <div className="flex flex-row min-h-screen bg-gray-100 text-gray-800">
      <main className="main flex flex-col flex-grow md:ml-0 transition-all duration-150 ease-in mx-auto">
        <div className="main-content flex flex-col flex-grow p-4">
          <h1 className="font-bold text-2xl text-gray-700">Calendario</h1>

          <div className="flex flex-col flex-grow rounded mt-4">
            <FullCalendar
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              initialView={"dayGridMonth"}
              headerToolbar={{
                left: "today prev,next",
                center: "title",
                end: "dayGridMonth,timeGridWeek,timeGridDay"
              }}
            />
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
  )
}
export default CalendarPage;