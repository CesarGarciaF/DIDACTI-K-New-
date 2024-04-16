import React, { createContext, useState, useEffect, useContext } from "react";
import {
  getUsersRequest,
  getUserByIdRequest,
  createUserRequest,
  updateUserRequest,
  deleteUserRequest,
} from "../services/UserService";

export const UserContext = createContext();



export const useUsers = () => {
  const context = useContext(UserContext);

  if (!context)
    throw new Error("useUsers debe usarse dentro de un UserProvider");

  return context;
};

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        await fetchUserById();
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const fetchUserById = async () => {
    try {
      const response = await getUserByIdRequest();
      setCurrentUser(response.data);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  const addUser = async (userData) => {
    setLoading(true);
    try {
      const response = await createUserRequest(userData);
      setUsers([...users, response.data]);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  const updateUser = async (updatedUserData) => {
    setLoading(true);
    try {
      const response = await updateUserRequest(updatedUserData);
      setCurrentUser(response.data);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  const deleteUser = async (userId) => {
    setLoading(true);
    try {
      await deleteUserRequest(userId);
      setUsers(users.filter((user) => user._id !== userId));
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  return (
    <UserContext.Provider
      value={{
        users,
        currentUser,
        setCurrentUser,
        loading,
        error,
        fetchUserById,
        addUser,
        updateUser,
        deleteUser,
      }}
    >
      {loading ? <p>Cargando...</p> : children}
    </UserContext.Provider>
  );
};
