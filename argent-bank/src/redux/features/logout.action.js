import { logout } from "./login.reducer";

export function userLogout() {
  return (dispatch, getState) => {
    localStorage.removeItem("persist:root");
    dispatch(logout());
  };
}
