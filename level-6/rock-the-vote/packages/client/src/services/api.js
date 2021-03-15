import axios from "axios";
import { loadState } from "../helpers/persistState";

const authAxios = axios.create();
const BASE_URL = process.env.REACT_APP_SERVER_BASE_URL;

authAxios.interceptors.request.use(config => {
  const { token } = loadState("user");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// Issues
export const getIssues = async () => {
  try {
    const res = await authAxios.get(`${BASE_URL}/issues`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const createIssue = async data => {
  try {
    const res = await authAxios.post(`${BASE_URL}/issues`, data);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const getIssue = async id => {
  try {
    const res = await authAxios.get(`${BASE_URL}/issues/${id}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const deleteIssue = async ({ _id }) => {
  try {
    const res = await authAxios.delete(`${BASE_URL}/issues/${_id}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const updateIssue = async ({ _id, ...data }) => {
  try {
    const res = await authAxios.put(`${BASE_URL}/issues/${_id}`, data);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const upvoteIssue = async ({ _id }) => {
  try {
    const res = await authAxios.put(`${BASE_URL}/issues/${_id}/upvote`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const downvoteIssue = async ({ _id }) => {
  try {
    const res = await authAxios.put(`${BASE_URL}/issues/${_id}/downvote`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

// Comments
export const createComment = async data => {
  try {
    const res = await authAxios.post(`${BASE_URL}/comments`, data);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const deleteComment = async id => {
  try {
    const res = await authAxios.delete(`${BASE_URL}/comments/${id}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const updateComment = async (id, data) => {
  try {
    const res = await authAxios.put(`${BASE_URL}/comments/${id}`, data);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
