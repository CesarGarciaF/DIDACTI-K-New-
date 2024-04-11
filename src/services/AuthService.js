import axios from "./Axios";

// export const loginRequest = async (credentials) => {
//   const { data } = await axios.post(`/login`, credentials);
//   return data;
// };

export const loginRequest = (user) => axios.post(`/login`, user);

export const signupRequest = (user) => axios.post(`/signup`, user);

// export const logoutRequest = (user) => axios.post(`/logout`, user);

export const verifyTokenRequest = () => axios.get("/verify");
