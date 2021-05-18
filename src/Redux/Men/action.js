import axios from "axios"
import GETDATA_SUCCESS from "./actionType"

const getdataSuccess=(payload)=>
{
    return {
        type:GETDATA_SUCCESS,
        payload
    }
}
export const getData=(payload)=>dispatch=>
{
    const requestParam = {
        url: "https://json-server27.herokuapp.com/men",
        method: "get"
      };
      axios(requestParam).then((response) =>
        dispatch(getdataSuccess(response.data))
      );
}