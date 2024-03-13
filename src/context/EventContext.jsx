import { createContext, useContext, useState } from "react";
import { getEventsRequest } from "../services/EventService";

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
      // console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <EventContext.Provider value={{ events, getEvents }}>
      {children}
    </EventContext.Provider>
  );
}
