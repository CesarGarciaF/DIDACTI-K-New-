import axios from "./Axios";

export const getEventsRequest = (events) => axios.get("/events");
