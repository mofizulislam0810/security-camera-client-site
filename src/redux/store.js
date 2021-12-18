import { createStore } from "redux";
import rootReducers from "./reducer";
import { persistStore } from "redux-persist";

export const store = createStore(rootReducers);

export const persitor = persistStore(store);
