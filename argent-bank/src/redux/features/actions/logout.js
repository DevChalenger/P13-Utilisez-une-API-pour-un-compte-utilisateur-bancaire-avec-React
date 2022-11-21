import { logout } from "../reducers/login";
import { clearData } from "../reducers/user";
export function userLogout() {
  return (dispatch, getState) => {
    dispatch(logout());
    dispatch(clearData());
  };
}
