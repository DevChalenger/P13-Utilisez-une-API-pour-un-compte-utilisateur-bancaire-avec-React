import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { userLogin } from "../redux/features/actions/login";
import { useSelector, useDispatch } from "react-redux";
import { selectLogin } from "../redux/selectors";

function LoginContent() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [invalidForm, setInvalidForm] = useState(false);
  const { register, handleSubmit } = useForm();
  const { data, error } = useSelector((state) => selectLogin(state));

  useEffect(() => {
    if (data) {
      navigate("/profile");
    }
  }, [navigate, data]);

  const submitForm = (data) => {
    if (error) {
      setInvalidForm(true);
    } else {
      setInvalidForm(false);
    }
    dispatch(userLogin(data));
  };

  const errorMessage = () => {
    if (error) {
      return JSON.parse(JSON.stringify(error.message));
    }
  };
  return (
    <section className="sign-in-content">
      <FontAwesomeIcon icon={faUserCircle} className="sign-in-icon" />
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            {...register("email")}
            autoComplete="email"
            required
          />
          {invalidForm && error ? (
            error.message === "Error: User not found!" ? (
              <div className="input-error">{errorMessage()}</div>
            ) : (
              ""
            )
          ) : (
            ""
          )}
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            {...register("password")}
            autoComplete="current-password"
            required
          />
          {invalidForm && error ? (
            error.message === "Error: Password is invalid" ? (
              <div className="input-error">{errorMessage()}</div>
            ) : (
              ""
            )
          ) : (
            ""
          )}
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button className="sign-in-button">Sign In</button>
      </form>
      <div className="sign-up-link-block">
        <Link to={"/register"} className="sign-up-link">
          Sign Up
        </Link>
      </div>
    </section>
  );
}

export default LoginContent;
