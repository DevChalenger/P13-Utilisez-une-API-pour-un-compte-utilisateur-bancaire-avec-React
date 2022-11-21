import { createSlice } from "@reduxjs/toolkit";
import { statusReducer } from "./status";

const initialState = {
  status: "void",
  data: null,
  error: null,
  loading: false,
};

const { actions, reducer } = createSlice({
  name: "signup",
  initialState,
  reducers: {
    ...statusReducer,
    clearData: () => {
      return initialState;
    },
  },
});

export const { pending, rejected, resolved, clearData } = actions;

export default reducer;
