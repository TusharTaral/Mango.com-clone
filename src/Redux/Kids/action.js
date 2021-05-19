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
    url: "https://json-server27.herokuapp.com/kids",
    method: "get"
  };
  axios(requestParam).then((response) =>
    dispatch(getdataSuccess(response.data))
  );
};