import { createSlice } from "@reduxjs/toolkit";
import { userLogin, userSignup, userGetData } from "./user.action";
const userToken = localStorage.getItem("userToken")
  ? localStorage.getItem("userToken")
  : null;

const initialState = {
  loginStatus: "void",
  profileGetStatus: "void",
  signupStatus: "void",
  data: null,
  userToken: userToken,
  error: null,
  loading: false,
};

const PENDING = "pending";
const VOID = "void";
const UPDATING = "updating";
const RESOLVED = "resolved";
const REJECTED = "rejected";

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    //userSigupReducer

    [userSignup.pending]: (draft) => {
      switch (draft.signupStatus) {
        case VOID:
          draft.signupStatus = PENDING;
          draft.loading = true;
          return;
        case REJECTED:
          draft.error = null;
          draft.signupStatus = PENDING;
          draft.loading = false;
          return;
        case RESOLVED:
          draft.signupStatus = UPDATING;
          draft.loading = false;
          return;
        default:
          return;
      }
    },

    [userSignup.rejected]: (draft) => {
      switch (draft.signupStatus) {
        default:
          return;
      }
    },

    [userSignup.resolved]: (draft) => {
      switch (draft.signupStatus) {
        default:
          return;
      }
    },

    //userLoginReducer

    [userLogin.pending]: (draft) => {
      switch (draft.loginStatus) {
        case VOID:
          draft.loginStatus = PENDING;
          draft.loading = true;
          return;
        case REJECTED:
          draft.error = null;
          draft.loginStatus = PENDING;
          draft.loading = true;
          return;
        case RESOLVED:
          draft.loginStatus = UPDATING;
          draft.loading = true;
          return;
        default:
          return;
      }
    },

    [userLogin.resolved]: (draft, action) => {
      switch (draft.loginStatus) {
        case PENDING || UPDATING:
          draft.data = action.payload;
          draft.loginStatus = RESOLVED;
          draft.loading = false;
          return;
        default:
          return;
      }
    },

    [userLogin.rejected]: (draft, action) => {
      switch (draft.loginStatus) {
        case PENDING || UPDATING:
          draft.loginStatus = REJECTED;
          draft.error = action.payload;
          draft.data = null;
          draft.loading = false;
          return;
        default:
          return;
      }
    },

    updatedUser: (draft, action) => {
      draft.data.firstName = action.payload.firstName;
      draft.data.lastName = action.payload.lastName;
      draft.loading = false;
      return;
    },

    logoutUser: (draft) => {
      localStorage.removeItem("userToken");
      draft = initialState;
      return;
    },
  },
});

const { action, reducer } = userSlice;

export { action };

export default reducer;
