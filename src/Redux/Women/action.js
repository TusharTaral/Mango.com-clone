import axios from "axios";
import { GETDATA_SUCCESS } from "./actionType";

export const getdataSuccess = (payload) => {
  return {
    type: GETDATA_SUCCESS,
    payload
  };
};

export const getData = (payload) => (dispatch) => {
  const requestParam = {
    url: "https://json-server27.herokuapp.com/women",
    method: "get",
    param:{
      q:payload
    }
  };
  axios(requestParam).then((response) =>
    dispatch(getdataSuccess(response.data))
  );
};