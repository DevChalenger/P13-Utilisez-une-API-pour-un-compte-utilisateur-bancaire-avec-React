import { createSlice } from "@reduxjs/toolkit";
import { statusReducer } from "./status";

const initialState = {
  status: "void",
  data: null,
  error: null,
  loading: false,
};

const { actions, reducer } = createSlice({
  name: "login",
  initialState,
  reducers: {
    ...statusReducer,
    logout: () => {
      return initialState;
    },
  },
});

export const { pending, rejected, resolved, logout } = actions;

export default reducer;
