import { IRootReducer } from "./interfaces";
import { combineReducers } from "redux";
import { health } from "./health/reducers";

const rootReducer: IRootReducer = combineReducers({
  health,
});

export default rootReducer;
