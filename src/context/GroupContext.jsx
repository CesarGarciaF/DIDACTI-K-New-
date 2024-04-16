import React, { createContext, useState, useEffect, useContext } from "react";
import {
  getGroupsRequest,
  getGroupByIdRequest,
  createGroupRequest,
  updateGroupRequest,
  deleteGroupRequest,
} from "../services/GroupService";

export const GroupContext = createContext();

export const useGroup = () => {
  const context = useContext(GroupContext);

  if (!context)
    throw new Error("useGroup debe usarse dentro de un GroupProvider");

  return context;
};

export const GroupProvider = ({ children }) => {
  const [groups, setGroups] = useState([]);
  const [group, setGroup] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGroupsData = async () => {
      try {
        await getGroups();
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchGroupsData();
  }, []);

  const getGroups = async () => {
    try {
      const response = await getGroupsRequest();
      setGroups(response.data);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  const fetchGroupById = async () => {
    try {
      const response = await getGroupByIdRequest();
      setGroup(response.data);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  const addGroup = async (groupData) => {
    setLoading(true);
    try {
      const response = await createGroupRequest(groupData);
      setGroups([...groups, response.data]);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  const updateGroup = async (updatedGroupData) => {
    setLoading(true);
    try {
      const response = await updateGroupRequest(updatedGroupData);
      setGroup(response.data);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  const deleteGroup = async (groupId) => {
    try {
      await deleteGroupRequest(groupId);
      setGroups(groups.filter((group) => group._id !== groupId));
    } catch (err) {
      setError(err);
    }
  };

  return (
    <GroupContext.Provider
      value={{
        groups,
        setGroups,
        group,
        setGroup,
        loading,
        error,
        getGroups,
        fetchGroupById,
        addGroup,
        updateGroup,
        deleteGroup,
      }}
    >
      {loading ? <p>Cargando...</p> : children}
    </GroupContext.Provider>
  );
};
