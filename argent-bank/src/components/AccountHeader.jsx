import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userUpdate } from "../redux/features/actions/update";

import { selectLogin, selectUser } from "../redux/selectors";

function AccountHeader() {
  const [toggleButton, setToggleButton] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { data } = useSelector(selectUser);
  const token = useSelector(selectLogin).data;

  const submitForm = async (formValue) => {
    dispatch(userUpdate(formValue, token));
    navigate("/profile");
    setToggleButton(false);
    reset();
  };
  useEffect(() => {
    if (errors) {
      console.log(errors);
    }
  });

  return data ? (
    !toggleButton ? (
      <header className="account-header">
        <h1>
          Welcome back
          <br />
          {data.firstName} {data.lastName}!
        </h1>
        <button
          className="edit-button"
          onClick={() => {
            setToggleButton(true);
          }}
        >
          Edit Name
        </button>
      </header>
    ) : (
      <header className="account-header">
        <h1>Welcome back</h1>
        <form
          action="POST"
          className="update-user-form"
          onSubmit={handleSubmit(submitForm)}
        >
          <div className="input-update">
            <div className="input-control">
              <input
                type="text"
                id="firstName"
                placeholder={data.firstName}
                {...register("firstName", {
                  pattern: {
                    value: /^[a-zA-Z]*$/,
                    message: "The firstName is not in correct format",
                  },
                  required: `First name field is required`,
                })}
                required
              />
              {errors.firstName ? (
                <p className="input-error">{errors.firstName.message}</p>
              ) : (
                ""
              )}
            </div>
            <div className="input-control">
              <input
                type="text"
                id="lastName"
                placeholder={data.lastName}
                {...register("lastName", {
                  pattern: {
                    value: /^[a-zA-Z]*$/,
                    message: "The lastName is not in correct format",
                  },
                  required: `Last name field is required`,
                })}
                required
              />
              {errors.lastName ? (
                <p className="input-error">{errors.lastName.message}</p>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="button-update">
            <button className="edit-button" type="submit">
              Save
            </button>
            <button
              className="edit-button"
              type="button"
              onClick={() => {
                setToggleButton(false);
                reset();
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      </header>
    )
  ) : (
    ""
  );
}

export default AccountHeader;
