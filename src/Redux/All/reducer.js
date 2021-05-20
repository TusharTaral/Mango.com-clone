import { GETDATA_SUCCESS } from "./actionType";

const initState = {
  dataall: []
};

export const reducer = (state = initState, action) => {
  const { type, payload } = action;
 //   console.log(payload);
  switch (type) {
    case GETDATA_SUCCESS:
      return {
        ...state,
        dataall: payload
      };
    default:
      return state;
  }
};