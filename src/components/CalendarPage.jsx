import React, { useState } from 'react';
import { Calendar, dayjsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import dayjs from 'dayjs';
import 'dayjs/locale/es';
import Modal from 'react-modal';
import './Components.css';

Modal.setAppElement('#root');
function CalendarPage() {
  dayjs.locale('es');

  const localizer = dayjsLocalizer(dayjs);

  // Array de eventos
  const events = [
    {
      title: 'Mi evento',
      start: dayjs('2024-03-07T00:00:00').toDate(),
      end: dayjs('2024-03-08T01:00:00').toDate(),
    },
  ];

  const messages = {
    allDay: 'Todo el día',
    previous: 'Anterior',
    next: 'Siguiente',
    today: 'Hoy',
    month: 'Mes',
    week: 'Semana',
    day: 'Día',
    agenda: 'Agenda',
    date: 'Fecha',
    time: 'Hora',
    event: 'Evento',
    noEventsInRange: 'Sin eventos',
  };

  return (
    <div className="flex flex-row min-h-screen bg-gray-100 text-gray-800 mt-12 mb-4">
      <main className="main flex flex-col flex-grow md:ml-0 transition-all duration-150 ease-in mx-auto">
        <div className="main-content flex flex-col flex-grow p-4">
          <h1 className="font-bold text-2xl text-gray-700">Calendario</h1>

          <div className="flex flex-col flex-grow rounded mt-4">
            <Calendar style={{zIndex: 1}}
              localizer={localizer}
              events={events}
              views={['month', 'day']}
              defaultView="month"
              min={dayjs('2024-03-07T08:00:00').toDate()}
              max={dayjs('2024-03-30T18:00:00').toDate()}
              formats={{
                dayFormat: date => dayjs(date).format('dddd - DD/MM'),
              }}
              messages={messages}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default CalendarPage;