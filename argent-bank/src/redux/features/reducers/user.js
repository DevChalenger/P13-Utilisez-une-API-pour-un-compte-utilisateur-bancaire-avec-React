import { createSlice } from "@reduxjs/toolkit";
import { statusReducer } from "./status";

const initialState = {
  status: "void",
  data: null,
  error: null,
  loading: false,
};

const { actions, reducer } = createSlice({
  name: "user",
  initialState,
  reducers: {
    ...statusReducer,

    clearData: () => {
      return initialState;
    },

    UPDATE_PROFILE: (draft, action) => {
      draft.data = action.payload;
      return;
    },
  },
});

export const { pending, rejected, resolved, clearData, UPDATE_PROFILE } =
  actions;

export default reducer;
