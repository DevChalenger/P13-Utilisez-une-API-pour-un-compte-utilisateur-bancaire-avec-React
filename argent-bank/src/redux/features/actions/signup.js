import { PENDING } from "../reducers/status";
import { selectSignup } from "../../selectors";
import { pending, resolved, rejected } from "../reducers/signup";
import instance from "./baseApi";

export function userSignup(formValue) {
  return async (dispatch, getState) => {
    const status = selectSignup(getState()).status;
    if (status === PENDING) {
      return;
    }
    dispatch(pending());
    try {
      const response = await instance.post("signup", formValue);
      const data = await response.data.body;

      dispatch(resolved(data));
    } catch (error) {
      dispatch(rejected(error.response.data));
    }
  };
}
