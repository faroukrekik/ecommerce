import { combineReducers } from "redux";
import userReducer from "./userReducer";
import prodReducer from "./prodReducers";
import CartReducer from "./CartReducer";
import PayReducer from "./PayReducer";

const rootReducer = combineReducers({
  userReducer,
  prodReducer,
  CartReducer,
  PayReducer,
});

export default rootReducer;
