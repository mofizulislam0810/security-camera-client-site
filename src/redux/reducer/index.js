import { combineReducers } from "redux";
import handleCart from "./handleCart";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["handleCart"],
};

const rootReducers = combineReducers({
  handleCart,
});

export default persistReducer(persistConfig, rootReducers);
