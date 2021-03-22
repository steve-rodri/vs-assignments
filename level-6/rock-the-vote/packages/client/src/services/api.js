import axios from "axios";
import { loadState } from "../utils/persistState";
import { baseUrl } from "../utils/env";

const authAxios = axios.create();

authAxios.interceptors.request.use(config => {
  const { token } = loadState("user");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// Issues
export const getIssues = async () => {
  try {
    const res = await authAxios.get(`${baseUrl}/issues`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const createIssue = async data => {
  try {
    const res = await authAxios.post(`${baseUrl}/issues`, data);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const findIssue = async id => {
  try {
    const res = await authAxios.get(`${baseUrl}/issues/${id}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const deleteIssue = async ({ _id }) => {
  try {
    const res = await authAxios.delete(`${baseUrl}/issues/${_id}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const updateIssue = async ({ _id, ...data }) => {
  try {
    const res = await authAxios.put(`${baseUrl}/issues/${_id}`, data);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const addUpvoteToIssue = async ({ _id }) => {
  try {
    const res = await authAxios.put(`${baseUrl}/issues/${_id}/upvote`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const removeUpvoteFromIssue = async ({ _id }) => {
  try {
    const res = await authAxios.delete(`${baseUrl}/issues/${_id}/upvote`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const addDownvoteToIssue = async ({ _id }) => {
  try {
    const res = await authAxios.put(`${baseUrl}/issues/${_id}/downvote`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const removeDownvoteFromIssue = async ({ _id }) => {
  try {
    const res = await authAxios.delete(`${baseUrl}/issues/${_id}/downvote`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

// Comments
export const createComment = async data => {
  try {
    const res = await authAxios.post(`${baseUrl}/comments`, data);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const deleteComment = async ({ _id, ...params }) => {
  try {
    const res = await authAxios({
      method: "DELETE",
      url: `${baseUrl}/comments/${_id}`,
      params: params,
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const updateComment = async ({ _id, ...data }) => {
  try {
    const res = await authAxios.put(`${baseUrl}/comments/${_id}`, data);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
