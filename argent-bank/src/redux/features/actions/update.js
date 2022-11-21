import { UPDATE_PROFILE } from "../reducers/user";
import instance from "./baseApi";

export function userUpdate(formValue, token) {
  return async (dispatch, getState) => {
    const headers = {
      Authorization: `Bearer ${token.token}`,
    };
    try {
      const response = await instance.put("profile", formValue, { headers });
      const data = await response.data.body;

      dispatch(UPDATE_PROFILE(data));
    } catch (error) {
      console.log(error.response.data);
    }
  };
}
