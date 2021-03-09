import axios from "axios";

const authAxios = axios.create();
const BASE_URL = process.env.REACT_APP_SERVER_BASE_URL;

authAxios.interceptors.request.use(config => {
  const token = localStorage.getItem("token");
  config.header.Authorization = `Bearer ${token}`;
});

// Issues
export const getIssues = async () => {
  try {
    const res = await authAxios.get(`${BASE_URL}/issues`);
    return res.data;
  } catch (err) {
    console.log(err.response.data.error);
  }
};

export const createIssue = async data => {
  try {
    const res = await authAxios.post(`${BASE_URL}/issues`, data);
    return res.data;
  } catch (err) {
    console.log(err.response.data.error);
  }
};

export const getIssue = async id => {
  try {
    const res = await authAxios.get(`${BASE_URL}/issues/${id}`);
    return res.data;
  } catch (err) {
    console.log(err.response.data.error);
  }
};

export const deleteIssue = async id => {
  try {
    const res = await authAxios.delete(`${BASE_URL}/issues/${id}`);
    return res.data;
  } catch (err) {
    console.log(err.response.data.error);
  }
};

export const updateIssue = async (id, data) => {
  try {
    const res = await authAxios.put(`${BASE_URL}/issues/${id}`, data);
    return res.data;
  } catch (err) {
    console.log(err.response.data.error);
  }
};

export const upvoteIssue = async id => {
  try {
    const res = await authAxios.put(`${BASE_URL}/issues/${id}/upvote`);
    return res.data;
  } catch (err) {
    console.log(err.response.data.error);
  }
};

export const downvoteIssue = async id => {
  try {
    const res = await authAxios.put(`${BASE_URL}/issues/${id}/downvote`);
    return res.data;
  } catch (err) {
    console.log(err.response.data.error);
  }
};

// Comments
export const createComment = async data => {
  try {
    const res = await authAxios.post(`${BASE_URL}/comments`, data);
    return res.data;
  } catch (err) {
    console.log(err.response.data.error);
  }
};

export const deleteComment = async id => {
  try {
    const res = await authAxios.delete(`${BASE_URL}/comments/${id}`);
    return res.data;
  } catch (err) {
    console.log(err.response.data.error);
  }
};

export const updateComment = async (id, data) => {
  try {
    const res = await authAxios.put(`${BASE_URL}/comments/${id}`, data);
    return res.data;
  } catch (err) {
    console.log(err.response.data.error);
  }
};
