import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const Api_Url = process.env.REACT_APP_Base_Url_Server;

const instance = axios.create({
  baseURL: Api_Url,
});

function userSignup() {
  return createAsyncThunk(
    "user/signup",
    async ({ firstName, lastName, email, password }) => {
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        await instance.post(
          "signup",
          { firstName, lastName, email, password },
          config
        );
      } catch (error) {}
    }
  );
}

function userLogin() {
  return createAsyncThunk(
    "user/login",
    async ({ email, password }, { rejectWithValue }) => {
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        const { data } = await instance.post(
          "login",
          { email, password },
          config
        );
        localStorage.setItem("userToken", data.body.token);
        return data;
      } catch (error) {
        if (error.response && error.response.data.message) {
          return rejectWithValue(error.response.data.message);
        } else {
          return rejectWithValue(error.message);
        }
      }
    }
  );
}

function userGetData() {
  return createAsyncThunk(
    "user/getData",
    async ({ email, password }, { getState, rejectWithValue }) => {
      try {
        // get user data from store
        const { user } = getState();

        // configure authorization header with user's token
        const config = {
          headers: {
            Authorization: `Bearer ${user.userToken}`,
          },
        };
        const { data } = await instance.post(
          "profile",
          { email, password },
          config
        );
        return data;
      } catch (error) {
        if (error.response && error.response.data.message) {
          return rejectWithValue(error.response.data.message);
        } else {
          return rejectWithValue(error.message);
        }
      }
    }
  );
}

function userUpdate() {
  return createAsyncThunk("user/update");
}

export { userGetData, userLogin, userSignup };
