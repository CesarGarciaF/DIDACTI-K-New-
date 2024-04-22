import axios from "axios";

const instance = axios.create({
  // baseURL: "https://thin-gene-kdrax.koyeb.app/api",
  baseURL: "https://didactik-api9.onrender.com/api",
  // baseURL: "http://localhost:5000/api",
  withCredentials: true,
});

const token = sessionStorage.getItem("token");

if (token)
  instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;

export default instance;
