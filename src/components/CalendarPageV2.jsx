import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { useEvents } from "../context/EventContext";

function CalendarPageV2() {
  const { getEvents, createEvent, events } = useEvents();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (values) => {
    createEvent(values);
  });

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <div className="flex flex-row bg-gray-100">
      <main className="main flex flex-col flex-grow md:ml-0 transition-all duration-150 ease-in mx-auto">
        <div className="main-content flex flex-col flex-grow p-4">
          <div className="flex flex-col flex-grow rounded mt-4">
            <FullCalendar
              plugins={[dayGridPlugin]}
              initialView="dayGridMonth"
              events={events}
            />
            <form className="mt-6" onSubmit={onSubmit}>
              <div>
                <label className="block text-gray-700">Nombre del evento</label>
                <input
                  type="text"
                  name="title"
                  placeholder="Nombre del evento"
                  {...register("title", { required: true })}
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                />
                {errors.title && (
                  <p className="text-red-500">El evento es requerido</p>
                )}
              </div>

              <div>
                <label className="block text-gray-700">Descripción</label>
                <input
                  type="text"
                  name="description"
                  placeholder="Ingrese la descripción del evento"
                  {...register("description")}
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-700">Fecha de inicio</label>
                <input
                  type="date"
                  name="start"
                  {...register("start")}
                  className="w-full px-4 py-3 rounded-lg text-black bg-gray-200 mt-2 border focus:border-blue-500
                  focus:bg-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-700">Fecha de fin</label>
                <input
                  type="date"
                  name="end"
                  {...register("end")}
                  className="w-full px-4 py-3 rounded-lg text-black bg-gray-200 mt-2 border focus:border-blue-500
                focus:bg-white focus:outline-none"
                />
              </div>

              {/* <div>
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                {...register("password", { required: true })}
                placeholder="Enter Password"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                focus:bg-white focus:outline-none"
              />
            </div> */}

              <button
                type="submit"
                className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
              px-4 py-3 mt-6"
              >
                Agregar
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default CalendarPageV2;
