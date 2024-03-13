import React, { useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { useEvents } from "../context/EventContext";

function CalendarPageV2() {
  const { getEvents, events } = useEvents();

  useEffect(() => {
    getEvents();
  });

  return (
    <div className="flex flex-row min-h-screen bg-gray-100 text-gray-100 mt-12 mb-4">
      <main className="main flex flex-col flex-grow md:ml-0 transition-all duration-150 ease-in mx-auto bg-dark-tremor-brand-faint">
        <div className="main-content flex flex-col flex-grow p-4">
          <div className="flex flex-col flex-grow rounded mt-4">
            <FullCalendar
              plugins={[dayGridPlugin]}
              initialView="dayGridMonth"
              events={events}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default CalendarPageV2;
