import "../styles/css/login.css";

import LoginContent from "../components/LoginContent";
import { useSelector } from "react-redux";
import { selectSignup } from "../redux/selectors";
import { useEffect } from "react";
import { useState } from "react";

function SignIn() {
  const [newUser, setNewUser] = useState(false);

  const { status, error } = useSelector(selectSignup);

  useEffect(() => {
    if (status === "resolved") {
      console.log(status);
      console.log(error);
      setNewUser(true);
      return;
    } else {
      setNewUser(false);
      return;
    }
  }, [status, error]);
  return (
    <main className="main bg-dark">
      <LoginContent />
      {newUser ? <section>New user has been created</section> : ""}
    </main>
  );
}

export default SignIn;
