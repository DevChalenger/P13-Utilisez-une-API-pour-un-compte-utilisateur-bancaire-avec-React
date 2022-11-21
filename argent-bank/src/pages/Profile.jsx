import AccountContent from "../components/AccountContent";
import dataAccount from "../__mocks__/dataAccount.json";
import "../styles/css/profile.css";
import AccountHeader from "../components/AccountHeader";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { selectLogin } from "../redux/selectors";

function Profile() {
  const navigate = useNavigate();

  const { status, data } = useSelector(selectLogin);

  useEffect(() => {
    if (!data) {
      setTimeout(() => {
        navigate("/login");
      }, 2000);
      return;
    }
  }, [data, navigate]);

  return status === "resolved" ? (
    <main className="main bg-dark account-container">
      <AccountHeader />
      <h2 className="sr-only">Accounts</h2>
      {dataAccount.map((account) => (
        <AccountContent
          key={account.accountType.accountTitle}
          title={account.accountType.accountTitle}
          id={account.accountType.accountId}
          amount={account.accountAmount}
          description={account.accountDescription}
        />
      ))}
    </main>
  ) : status === "rejected" || status === "void" ? (
    <main className="main bg-dark account-container">
      <div className="account-block-error">
        <p>
          You are not authorized to access this page you will be redirected to
          login page
        </p>
      </div>
    </main>
  ) : status === "pending" ? (
    <main className="main bg-dark account-container">
      <div className="account-block-error">
        <p>Loading...</p>
      </div>
    </main>
  ) : (
    ""
  );
}

export default Profile;
