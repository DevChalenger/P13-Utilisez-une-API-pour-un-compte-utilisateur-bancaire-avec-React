import Logo from "../assets/argentBankLogo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import "../styles/css/header.css";

function Header() {
  return (
    <header className="app-header">
      <nav className="app-nav">
        <Link to={"/"} className="app-logo">
          <img src={Logo} alt="Argent Bank Logo" className="app-logo-image" />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div className="app-nav-block-items">
          <Link to={"/login"} className="app-nav-item">
            <FontAwesomeIcon icon={faUserCircle} />
            &nbsp;Sign In
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
