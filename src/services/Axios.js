import axios from "axios";

const instance = axios.create({
  baseURL: "https://didactik-api9.onrender.com/api",
  withCredentials: true,
});

export default instance;