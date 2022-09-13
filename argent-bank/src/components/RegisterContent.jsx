import { Link } from "react-router-dom";

function RegisterContent() {
  return (
    <section className="sign-up-content">
      <h1>Sign Up</h1>
      <form>
        <div className="input-wrapper">
          <label htmlFor="firstName">First name</label>
          <input
            type="text"
            id="firstName"
            autoComplete="given-name"
            required
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="lastName">Last name</label>
          <input
            type="text"
            id="lastName"
            autoComplete="family-name"
            required
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" autoComplete="email" required />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            autoComplete="current-password"
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
