import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/reducers/user";
import loginReducer from "./features/reducers/login";
import signupReducer from "./features/reducers/signup";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/";
import thunk from "redux-thunk";

const reducers = combineReducers({
  signup: signupReducer,
  login: loginReducer,
  user: userReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["login", "user"],
  blacklist: ["signup"],
  timeout: 2000,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});
