import axios from "./Axios";

export const getFieldsRequest = (events) => axios.get("/field");

// export const createFieldRequest = (event) => axios.post("/field", event);
