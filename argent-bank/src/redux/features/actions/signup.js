import { PENDING, UPDATING } from "../reducers/status";
import { selectLogin } from "../../selectors";
/* import { pending, resolved, rejected } from "../reducers/login"; */
import instance from "./baseApi";

export function userLogin(formValue) {
  return async (dispatch, getState) => {
    const status = selectLogin(getState()).status;
    if (status === PENDING || status === UPDATING) {
      return;
    }
    /*     dispatch(pending()); */
    try {
      const response = await instance.post("signup", formValue);
      /*    const data = await response.data.body;

      dispatch(resolved(data)); */
    } catch (error) {
      /*      dispatch(rejected(error.response.data));
      console.log(error.response.data); */
    }
  };
}
