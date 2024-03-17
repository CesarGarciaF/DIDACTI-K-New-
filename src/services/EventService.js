import axios from "./Axios";

export const getEventsRequest = (events) => axios.get("/events");

export const createEventRequest = (event) => axios.post("/events", event);
