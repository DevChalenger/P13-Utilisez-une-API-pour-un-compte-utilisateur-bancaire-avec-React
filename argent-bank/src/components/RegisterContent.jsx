import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { selectSignup } from "../redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { userSignup } from "../redux/features/actions/signup";

function RegisterContent() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [invalidForm, setInvalidForm] = useState(false);
  const { register, handleSubmit } = useForm();
  const { error, status } = useSelector(selectSignup);
  console.log(status);

  const submitForm = (formValue) => {
    if (error) {
      setInvalidForm(true);
    } else {
      setInvalidForm(false);
      navigate("/login");
    }

    dispatch(userSignup(formValue));
  };

  return (
    <section className="sign-up-content">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit(submitForm)}>
        <div className="input-wrapper">
          <label htmlFor="firstName">First name</label>
          <input
            type="text"
            id="firstName"
            autoComplete="given-name"
            {...register("firstName")}
            minLength="2"
            required
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="lastName">Last name</label>
          <input
            type="text"
            id="lastName"
            autoComplete="family-name"
            {...register("lastName")}
            minLength="2"
            required
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            autoComplete="email"
            {...register("email")}
            minLength="3"
            required
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            autoComplete="current-password"
            {...register("password")}
            minLength="12"
            required
          />
        </div>

        <button className="sign-in-button">Sign Up</button>
      </form>
      <div className="sign-in-link-block">
        <Link to={"/login"} className="sign-in-link">
          Sign In
        </Link>
      </div>
    </section>
  );
}

export default RegisterContent;
