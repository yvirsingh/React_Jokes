import axios from "axios";
import * as AppConstant from "../AppConstant/AppConstant";

const baseURL = AppConstant.API_URL;
//const baseURL = process.env.REACT_APP_API_URL;

export const GetRandomJokes = () => {
  return axios
    .get(`${baseURL}/search`, {
      headers: {
        Accept: "application/json"
      }
    })
    .then((response) => {
      return response;
    })
    .catch((error) => {
      // console.error(error);
    });
};
