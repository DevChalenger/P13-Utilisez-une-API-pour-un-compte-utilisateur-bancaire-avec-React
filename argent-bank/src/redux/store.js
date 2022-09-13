import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/reducers/user";
import loginReducer from "./features/reducers/login";
import { persistReducer } from "redux-persist";
import { persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage/";
import thunk from "redux-thunk";

const reducers = combineReducers({
  login: loginReducer,
  user: userReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});
