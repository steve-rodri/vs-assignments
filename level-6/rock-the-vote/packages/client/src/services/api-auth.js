import axios from "axios";

const BASE_URL = process.env.REACT_APP_SERVER_BASE_URL;

export const createUser = async credentials => {
  try {
    const resp = await axios.post(`${BASE_URL}/auth`, credentials);
    return resp.data;
  } catch (err) {
    console.log(err.response.data.error);
  }
};

export const getUser = async credentials => {
  try {
    const resp = await axios.get(`${BASE_URL}/auth`, credentials);
    return resp.data;
  } catch (err) {
    console.log(err.response.data.error);
  }
};
