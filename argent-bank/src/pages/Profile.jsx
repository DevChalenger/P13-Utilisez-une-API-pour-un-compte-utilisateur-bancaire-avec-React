import AccountContent from "../components/AccountContent";
import dataAccount from "../__mocks__/dataAccount.json";
import "../styles/css/profile.css";
import AccountHeader from "../components/AccountHeader";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { userGetData } from "../redux/features/actions/user";

function Profile() {
  const accountData = dataAccount.dataAccount;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getDataStorage = JSON.parse(localStorage.getItem("persist:root"));
  const dataLogin = JSON.parse(getDataStorage.login);
  const token = dataLogin.data;

  useEffect(() => {
    if (!token) {
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } else {
      dispatch(userGetData(token));
    }
  }, [dispatch, token, navigate]);

  return token ? (
    <main className="main bg-dark account-container">
      <AccountHeader />
      <h2 className="sr-only">Accounts</h2>
      {accountData.map((account) => (
        <AccountContent
          key={account.accountType.accountTitle}
          title={account.accountType.accountTitle}
          id={account.accountType.accountId}
          amount={account.accountAmount}
          description={account.accountDescription}
        />
      ))}
    </main>
  ) : (
    <main className="main bg-dark account-container">
      <div className="account-block-error">
        <p>
          Vous n'êtes pas autoriser à accéder à cette page vous aller être
          redirigé vers la page de connection
        </p>
      </div>
    </main>
  );
}

export default Profile;
