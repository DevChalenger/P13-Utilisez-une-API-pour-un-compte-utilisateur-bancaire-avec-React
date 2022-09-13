import { PENDING, UPDATING } from "../reducers/status";
import { selectLogin } from "../../selectors";
import { pending, resolved, rejected } from "../reducers/user";
import instance from "./baseApi";

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
      const response = await instance.post("profile", {}, { headers });
      const data = await response.data.body;
      dispatch(resolved(data));
    } catch (error) {
      dispatch(rejected(error));
    }
  };
}
