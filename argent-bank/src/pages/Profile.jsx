import AccountContent from "../components/AccountContent";
import data from "../__mocks__/dataAccount.json";
import "../styles/css/profile.css";
import AccountHeader from "../components/AccountHeader";

function Profile() {
  const accountData = data.dataAccount;
  return (
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
  );
}

export default Profile;
