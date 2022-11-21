import { PENDING } from "../reducers/status";
import { selectLogin } from "../../selectors";
import { pending, resolved, rejected } from "../reducers/login";
import instance from "./baseApi";

export function userLogin(formValue) {
  return async (dispatch, getState) => {
    const status = selectLogin(getState()).status;
    if (status === PENDING) {
      return setTimeout(() => {
        dispatch(rejected());
      }, 20000);
    }
    dispatch(pending());
    try {
      const response = await instance.post("login", formValue);
      const data = await response.data.body;
      dispatch(resolved(data));
    } catch (error) {
      dispatch(rejected(error.response.data));
    }
  };
}
