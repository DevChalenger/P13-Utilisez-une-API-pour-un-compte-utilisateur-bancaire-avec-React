import { PENDING } from "../reducers/status";
import { selectUser } from "../../selectors";
import { pending, resolved, rejected } from "../reducers/user";
import instance from "./baseApi";

export function userGetData(token) {
  return async (dispatch, getState) => {
    const status = selectUser(getState()).status;

    if (status === PENDING) {
      return;
    }

    const headers = {
      Authorization: `Bearer ${token.token}`,
    };

    dispatch(pending());
    try {
      const response = await instance.post("profile", {}, { headers });
      const data = await response.data.body;
      const objectUser = {
        firstName: data.firstName,
        lastName: data.lastName,
      };
      dispatch(resolved(objectUser));
    } catch (error) {
      dispatch(rejected(error));
    }
  };
}
