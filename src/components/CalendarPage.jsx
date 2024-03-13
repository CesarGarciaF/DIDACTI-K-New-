import React, { useEffect, useState } from "react";
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import dayjs from "dayjs";
import "dayjs/locale/es";
import Modal from "react-modal";
import "./Components.css";
import { useEvents } from "../context/EventContext";

Modal.setAppElement("#root");
function CalendarPage() {
  dayjs.locale("es");

  const { getEvents, events } = useEvents();

  const localizer = dayjsLocalizer(dayjs);

  // Eventos
  useEffect(() => {
    getEvents();

    // const convertedEvents = events.map((event) => ({
    //   // console.log(...event),
    //   title: event.title,
    //   description: event.description,
    //   start: new Date(event.start),
    //   end: new Date(event.end),
    // }));
  }, []);

  console.log(events);
  // const events = [
  //   {
  //     title: "Mi evento",
  //     nota: "test 1",
  //     start: dayjs("2024-03-07T00:00:00").toDate(),
  //     end: dayjs("2024-03-08T01:00:00").toDate(),
  //   },
  //   {
  //     title: "Cumpleaños de German",
  //     nota: "Cumpleaños feliz,  feliz vida pa",
  //     start: dayjs("2024-03-07T00:00:00").toDate(),
  //     end: dayjs("2024-03-08T01:00:00").toDate(),
  //   },
  // ];

  const messages = {
    allDay: "Todo el día",
    previous: "Anterior",
    next: "Siguiente",
    today: "Hoy",
    month: "Mes",
    week: "Semana",
    day: "Día",
    agenda: "Agenda",
    date: "Fecha",
    time: "Hora",
    event: "Evento",
    noEventsInRange: "Sin eventos",
  };

  const [selectedEvent, setSelectedEvent] = useState(undefined);
  const [modalState, setModalState] = useState(false);

  const handleSelectedEvent = (e) => {
    setSelectedEvent(e);
    setModalState(true);
  };

  const Modal = () => {
    return (
      <div className={`modal-${modalState === true ? "show" : "hide"}`}>
        {selectedEvent && (
          <div style={{ color: "white" }}>
            <p>Nombre del evento: {selectedEvent.title}</p>
            <p>Evento: {selectedEvent.description.toLocaleString()}</p>
            <p>Fecha de inicio: {selectedEvent.start.toLocaleString()}</p>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="flex flex-row min-h-screen bg-gray-100 text-gray-800 mt-12 mb-4">
      <main className="main flex flex-col flex-grow md:ml-0 transition-all duration-150 ease-in mx-auto bg-dark-tremor-brand-faint">
        <div className="main-content flex flex-col flex-grow p-4">
          <div className="flex flex-col flex-grow rounded mt-4">
            {selectedEvent && <Modal />}
            <Calendar
              style={{ zIndex: 1 }}
              localizer={localizer}
              events={events}
              views={["month", "day"]}
              defaultView="month"
              min={dayjs("2024-03-07T08:00:00").toDate()}
              max={dayjs("2024-03-30T18:00:00").toDate()}
              formats={{
                dayFormat: (date) => dayjs(date).format("dddd - DD / MM"),
              }}
              messages={messages}
              onSelectSlot={(e) => handleSelect(e)}
              onSelectEvent={(e) => handleSelectedEvent(e)}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default CalendarPage;
