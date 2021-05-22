import { combineReducers } from "redux";
import { basketSlice } from "../slices/basketSlice";

const rootReducer = combineReducers({
  basket: basketSlice.reducer,
});

export default rootReducer;
