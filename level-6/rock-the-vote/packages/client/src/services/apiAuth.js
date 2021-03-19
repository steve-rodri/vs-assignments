import axios from "axios";

const BASE_URL = process.env.REACT_APP_SERVER_BASE_URL;

export const createUser = async credentials => {
  try {
    const resp = await axios.post(`${BASE_URL}/signup`, credentials);
    return resp.data;
  } catch (err) {
    return { error: err.response.data.message };
  }
};

export const getUser = async credentials => {
  try {
    const resp = await axios.post(`${BASE_URL}/login`, credentials);
    return resp.data;
  } catch (err) {
    return { error: err.response.data.message };
  }
};
