import axios from "./Axios";

export const loginRequest = async (user) => await axios.post("/login", user);

export const signupRequest = (user) => axios.post(`/signup`, user);

export const profileRequest = async () => await axios.get("/profile");

export const verifyTokenRequest = () => axios.get("/verify");
