import axios from "./Axios";

export const getGroupsRequest = () => axios.get("/group");

export const getGroupByIdRequest = (groupId) => axios.get(`/group/${groupId}`);

export const createGroupRequest = (groupData) =>
  axios.post("/group", groupData);

export const updateGroupRequest = (groupId, updatedGroupData) =>
  axios.put(`/group/${groupId}`, updatedGroupData);

export const deleteGroupRequest = (groupId) =>
  axios.delete(`/group/${groupId}`);
