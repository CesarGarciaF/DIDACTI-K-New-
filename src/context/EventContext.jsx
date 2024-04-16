import { createContext, useContext, useState } from "react";
import { getEventsRequest, createEventRequest } from "../services/EventService";

const EventContext = createContext();

export const useEvents = () => {
  const context = useContext(EventContext);

  if (!context)
    throw new Error("useEvents debe usarse dentro de un EventProvider");

  return context;
};

export function EventProvider({ children }) {
  const [events, setEvents] = useState([]);

  const getEvents = async () => {
    try {
      const res = await getEventsRequest();
      setEvents(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createEvent = async (event) => {
    try {
      const res = await createEventRequest(event);
      getEvents();
    } catch (error) {
      console.log(error);
    }
  };

  const updateEvent = async (event) => {
    try {
      const res = await updateEventRequest(event);
      getEvents();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <EventContext.Provider
      value={{ events, getEvents, createEvent, updateEvent }}
    >
      {children}
    </EventContext.Provider>
  );
}
