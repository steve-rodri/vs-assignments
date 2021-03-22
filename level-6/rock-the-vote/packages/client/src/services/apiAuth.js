import axios from "axios";
import { baseUrl } from "../utils/env";

export const createUser = async credentials => {
  try {
    const resp = await axios.post(`${baseUrl}/signup`, credentials);
    return resp.data;
  } catch (err) {
    return { error: err.response.data.message };
  }
};

export const getUser = async credentials => {
  try {
    const resp = await axios.post(`${baseUrl}/login`, credentials);
    return resp.data;
  } catch (err) {
    return { error: err.response.data.message };
  }
};
