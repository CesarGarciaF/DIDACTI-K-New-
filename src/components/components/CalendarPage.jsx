import React, { useState, useEffect, useRef  } from "react";
import { useForm } from "react-hook-form";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { useEvents } from "../../context/EventContext";
import { FloatButton, Modal } from "antd";
import moment from 'moment';

function CalendarPageV2() {
  const { events, getEvents, createEvent } = useEvents();
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [editMode, setEditMode] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (values) => {
    if (editMode) {
      // Update the selected event with the new values
      setSelectedEvent((prevEvent) => ({
        ...prevEvent,
        ...values,
      }));
      // Update the events state to reflect the updated event
      setEvents(
        events.map((event) => {
          if (event.id === selectedEvent.id) {
            return { ...event, ...values };
          }
          return event;
        })
      );
      setOpenModal(false);
    } else {
      // Create a new event with the given values
      createEvent(values);
      setOpen(false);
      reset();
    }
  });
  
  const deleteEvent = async (eventId) => {
    // Implement logic to delete the event with the given eventId
    // This might involve making an API call to your backend
    // or updating your local event data store
    console.log('Deleting event with ID:', eventId);
    // After deleting the event, update the events state to remove the deleted event
    setEvents(events.filter((event) => event.id !== eventId));
  };

  useEffect(() => {
    getEvents();
  }, []);

  const handleEditModeToggle = () => {
    setEditMode((prevEditMode) => !prevEditMode);
  };

  const handleEventClick = (info) => {
    setSelectedEvent(info.event);
    setOpenModal(true);
    setEditMode(true);
    reset(event);
  };

  return (
    <div className="flex flex-row bg-gray-100">
      <main className="main flex flex-col flex-grow md:ml-0 transition-all duration-150 ease-in mx-auto">
        <div className="flex flex-col flex-grow rounded mt-4 ">
          {/* Boton con formulario flotante */}
          <FloatButton onClick={() => setOpen(true)} tooltip="Crear Grupo" />
          {/* Modal para crear eventos*/}
          <Modal
            centered
            open={open}
            onCancel={() => setOpen(false)}
            footer={[
              <button
                key="close"
                type="submit"
                onClick={() => setOpen(false)}
                className="mr-2 rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Cerrar
              </button>,
              <button
                key="save"
                type="submit"
                onClick={onSubmit}
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Guardar
              </button>,
            ]}
          >
            <h1 className="font-bold text-2xl text-gray-700">Crear Evento</h1>
            <form className="w-full max-w-lg">
              <div className="flex flex-wrap -mx-3 mb-6 mt-3">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-first-name"
                  >
                    Nombre del Evento
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    placeholder="Ingrese el nombre del evento"
                    {...register("title", { required: true })}
                  />
                  {errors.title && (
                    <p className="text-red-500">El evento es requerido</p>
                  )}
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-last-name"
                  >
                    Descripcion
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-last-name"
                    type="text"
                    placeholder="Ingrese la descripción del evento"
                    {...register("description", { required: true })}
                  />
                </div>
              </div>
              <div className="flex flex-wrap">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Fecha de inicio
                  </label>
                  <input
                    type="date"
                    name="start"
                    {...register("start")}
                    className="w-full px-4 py-3 rounded-lg text-black bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  />
                </div>
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mt-3"
                    htmlFor="grid-password"
                  >
                    Fecha de fin
                  </label>
                  <input
                    type="date"
                    name="end"
                    {...register("end")}
                    className="w-full px-4 py-3 rounded-lg text-black bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  />
                </div>
              </div>
            </form>
          </Modal>
          {/* Modal para editar eventos*/}
          <Modal
            centered
            open={openModal}
            onCancel={() => setOpenModal(false)}
            footer={[
              <button
                key="close"
                type="submit"
                onClick={() => setOpenModal(false)}

                className="mr-2 rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Cerrar
              </button>,
              <button
                key="save"
                type="submit"
                onClick={editMode ? handleEditModeToggle : onSubmit}
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {editMode ? "Editar" : "Guardar"}
              </button>,
            ]}
          >
            <h1 className="font-bold text-2xl text-gray-700">
              {editMode ? "Detalles del" : "Editar"} Evento
            </h1>
            <form className="w-full max-w-lg">
              {/* Contenido del formulario */}
              <div className="flex flex-wrap -mx-3 mb-6 mt-3">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-first-name"
                  >
                    Nombre del Evento
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    value={selectedEvent ? selectedEvent.title : ""}
                    onChange={(e) => setSelectedEvent({ ...selectedEvent, title: e.target.value })}
                    disabled={editMode}
                  />
                  {errors.title && (
                    <p className="text-red-500">{event.title}</p>
                  )}
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-last-name"
                  >
                    Descripcion
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-description-name"
                    type="text"
                    value={selectedEvent ? (selectedEvent.extendedProps?.description || "") : ""}
                    onChange={(e) =>
                      setSelectedEvent((prevEvent) => ({
                        ...prevEvent,
                        extendedProps: {
                          ...prevEvent?.extendedProps,
                          description: e.target.value
                        }
                      }))
                    }
                    disabled={editMode}
                  />

                </div>
              </div>
              <div className="flex flex-wrap -mx-3 ">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Fecha de inicio
                  </label>
                  <input
                    type="date"
                    name="start"
                    className="w-full px-4 py-3 rounded-lg text-black bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                    value={selectedEvent ? moment(selectedEvent.start).format("YYYY-MM-DD") : ""}
                    onChange={(e) => setSelectedEvent({ ...selectedEvent, start: e.target.value })}
                    disabled={editMode}
                  />
                </div>
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mt-3"
                    htmlFor="grid-password"
                  >
                    Fecha de fin
                  </label>
                  <input
                    type="date"
                    name="end"
                    className="w-full px-4 py-3 rounded-lg text-black bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                    value={selectedEvent ? moment(selectedEvent.end).format("YYYY-MM-DD") : ""}
                    onChange={(e) => setSelectedEvent({ ...selectedEvent, end: e.target.value })}
                    disabled={editMode}
                  />
                </div>
              </div>
            </form>
          </Modal>

        </div>

        <div className="main-content flex flex-col flex-grow p-4">
          <div className="flex flex-col flex-grow rounded mt-4">
            <FullCalendar
              plugins={[dayGridPlugin]}
              initialView="dayGridMonth"
              events={events}
              eventClick={handleEventClick}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default CalendarPageV2;