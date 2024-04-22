import axios from "./Axios";

export const getUsersRequest = () => axios.get("/user");

export const getUserByIdRequest = () => axios.get(`/user`);

export const createUserRequest = (userData) => axios.post("/user", userData);

export const updateUserRequest = (updatedUserData) =>
  axios.put(`/user`, updatedUserData);

export const deleteUserRequest = (userId) => axios.delete(`/user/${userId}`);
