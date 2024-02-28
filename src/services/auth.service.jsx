import axios from "axios";

const baseUrl = "http://localhost:5000/api";

export const login = async (credentials) => {
  const { data } = await axios.post(`${baseUrl}/login`, credentials);
  return data;
};

export const signup = (user) => axios.post(`${baseUrl}/signup`, user);
