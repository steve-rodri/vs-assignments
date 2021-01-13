import axios from "axios";
import { camelCase, paramCase } from "change-case-object";
import qs from "qs";

const baseUrl = "https://api.nomics.com/v1";
const key = process.env.REACT_APP_NOMICS_API_KEY;
const params = { key, perPage: 100 };
const serializer = params => qs.stringify(paramCase(params));

export const getCoins = async page => {
  try {
    const resp = await axios({
      url: `${baseUrl}/currencies/ticker`,
      params: { ...params, page },
      paramsSerializer: serializer,
    });
    return camelCase(resp.data);
  } catch (e) {
    console.log(e);
  }
};

export const getCoin = async id => {
  try {
    const resp = await axios({
      url: `${baseUrl}/currencies`,
      params: { ...params, ids: id },
      paramsSerializer: serializer,
    });
    return camelCase(resp.data);
  } catch (e) {
    console.log(e);
  }
};
