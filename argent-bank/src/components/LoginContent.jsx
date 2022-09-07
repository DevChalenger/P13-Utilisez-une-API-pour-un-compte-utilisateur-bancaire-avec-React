import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { userLogin } from "../redux/features/login.action";
import { useSelector, useDispatch } from "react-redux";

function LoginContent() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const { data } = useSelector((state) => state.login);

  useEffect(() => {
    if (data) {
      navigate("/profile");
    }
  }, [navigate, data]);

  const submitForm = (data) => {
    dispatch(userLogin(data));
  };

  return (
    <section className="sign-in-content">
      <FontAwesomeIcon icon={faUserCircle} className="sign-in-icon" />
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" {...register("email")} required />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            {...register("password")}
            required
          />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button className="sign-in-button">Sign In</button>
      </form>
    </section>
  );
}

export default LoginContent;
