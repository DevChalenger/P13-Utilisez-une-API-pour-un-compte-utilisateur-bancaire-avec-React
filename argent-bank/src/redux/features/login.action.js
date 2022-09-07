import { PENDING, UPDATING } from "./status.reducer";
import axios from "axios";
import { selectLogin } from "../selectors";
import { pending, resolved, rejected } from "./login.reducer";

const Api_Url = process.env.REACT_APP_Base_Url_Server;

const instance = axios.create({
  baseURL: Api_Url,
});

export function userLogin(formValue) {
  return async (dispatch, getState) => {
    const status = selectLogin(getState()).status;
    console.log(formValue);
    if (status === PENDING || status === UPDATING) {
      return;
    }

    dispatch(pending());
    try {
      const response = await instance.post("login/", formValue);
      const data = await response.data.body;

      dispatch(resolved(data));
    } catch (error) {
      dispatch(rejected(error));
      console.log(error);
    }
  };
}
