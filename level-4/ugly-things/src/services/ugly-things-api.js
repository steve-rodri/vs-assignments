import axios from "axios";

const baseUrl = `https://api.vschool.io`;
const name = "steve";

export const getThings = async () => {
  try {
    const resp = await axios.get(`${baseUrl}/${name}/thing`);
    return resp.data;
  } catch (e) {
    return null;
  }
};

export const getThing = async id => {
  try {
    const resp = await axios.get(`${baseUrl}/${name}/thing/${id}`);
    return resp.data;
  } catch (e) {
    return null;
  }
};

export const createThing = async data => {
  try {
    const resp = await axios.post(`${baseUrl}/${name}/thing`, data);
    return resp.data;
  } catch (e) {
    return null;
  }
};

export const updateThing = async data => {
  try {
    const resp = await axios.put(`${baseUrl}/${name}/thing/${data._id}`, data);
    return resp.data;
  } catch (e) {
    return null;
  }
};

export const deleteThing = async data => {
  try {
    const resp = await axios.delete(`${baseUrl}/${name}/thing/${data._id}`);
    return resp.data;
  } catch (e) {
    return null;
  }
};
