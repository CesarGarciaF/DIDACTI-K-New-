import axios from "axios";

const instance = axios.create({
  baseURL: "https://didactik-api9.onrender.com/api",
  // baseURL: "http://localhost:5000/api",
  withCredentials: true,
});

export default instance;
