import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import {womenReducer} from "../Redux/Women/womenReducer"
import { kidsReducer } from "./Kids/kidReducer";
import {menReducer} from "./Men/menReducer"
import { plusReducer } from "./Plus_Size/plusReducer";
import {reducer} from "./All/reducer"
const rootReducer = combineReducers({
  women:womenReducer,
  men:menReducer,
  kids:kidsReducer,
  plus:plusReducer,
  all:reducer
});
export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);