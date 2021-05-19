import { GETDATA_SUCCESS } from "./actionType";

const initState = {
  data: []
};

export const plusReducer = (state = initState, action) => {
  const { type, payload } = action;
 //   console.log(payload);
  switch (type) {
    case GETDATA_SUCCESS:
      return {
        ...state,
        data: payload
      };
    default:
      return state;
  }
};