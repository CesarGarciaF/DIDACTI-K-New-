import axios from "./Axios";
import Cookies from "js-cookie";

export const getUsersRequest = () => axios.get("/user");

export const getUserByIdRequest = () => {
  const token = Cookies.get("token");

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return axios.get(`/user`, config);
};

export const createUserRequest = (userData) => axios.post("/user", userData);

export const updateUserRequest = (updatedUserData) => {
  const token = Cookies.get("token");

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return axios.put(`/user`, updatedUserData, config);
};

export const deleteUserRequest = (userId) => axios.delete(`/user/${userId}`);
