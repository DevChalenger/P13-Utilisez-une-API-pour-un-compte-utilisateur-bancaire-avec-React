import { logout } from "../reducers/login";
import { clearData } from "../reducers/user";
export function userLogout() {
  return (dispatch, getState) => {
    localStorage.removeItem("persist:root");
    dispatch(logout());
    dispatch(clearData());
  };
}
