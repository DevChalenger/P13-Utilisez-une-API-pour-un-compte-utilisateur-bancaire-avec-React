import { PENDING, UPDATING } from "./status.reducer";
import axios from "axios";
import { selectLogin } from "../selectors";
import { pending, resolved, rejected } from "./user.reducer";
import { useSelector } from "react-redux";

const Api_Url = process.env.REACT_APP_Base_Url_Server;

const instance = axios.create({
  baseURL: Api_Url,
});

export function userGetData(token) {
  return async (dispatch, getState) => {
    const status = selectLogin(getState()).status;

    if (status === PENDING || status === UPDATING) {
      return;
    }

    const headers = {
      Authorization: `Bearer ${token.token}`,
    };

    dispatch(pending());
    try {
      const response = await instance.post("profile/", {}, { headers });
      const data = await response.data.body;
      console.log(data);
      dispatch(resolved(data));
    } catch (error) {
      dispatch(rejected(error));
      console.log(error);
    }
  };
}
