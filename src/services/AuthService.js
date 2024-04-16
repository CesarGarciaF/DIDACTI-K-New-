import axios from "./Axios";
import Cookies from "js-cookie";

// export const loginRequest = async (credentials) => {
//   const { data } = await axios.post(`/login`, credentials);
//   return data;
// };

export const loginRequest = (user) => axios.post(`/login`, user);

export const signupRequest = (user) => axios.post(`/signup`, user);

export const profileRequest = () => {
  const token = Cookies.get("token");

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return axios.get(`/profile`, config);
};

export const verifyTokenRequest = () => axios.get("/verify");
