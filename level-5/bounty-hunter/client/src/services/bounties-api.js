import axios from "axios";

const baseUrl = `http://localhost:4000`;

export const getBounties = async () => {
  try {
    const resp = await axios.get(baseUrl);
    return resp.data;
  } catch (e) {
    return null;
  }
};

export const getBounty = async id => {
  try {
    const resp = await axios.get(`${baseUrl}/${id}`);
    return resp.data;
  } catch (e) {
    return null;
  }
};

export const createBounty = async data => {
  try {
    const resp = await axios.post(baseUrl, data);
    return resp.data;
  } catch (e) {
    return null;
  }
};

export const updateBounty = async data => {
  try {
    const resp = await axios.put(`${baseUrl}/${data._id}`, data);
    return resp.data;
  } catch (e) {
    return null;
  }
};

export const deleteBounty = async data => {
  try {
    const resp = await axios.delete(`${baseUrl}/${data._id}`);
    return resp.data;
  } catch (e) {
    return null;
  }
};
