import Logo from "../assets/argentBankLogo.png";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightFromBracket,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/css/header.css";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../redux/features/actions/logout";
import { selectUser } from "../redux/selectors";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data } = useSelector(selectUser);

  const logOut = () => {
    dispatch(userLogout());
    navigate("/");
    return;
  };

  return (
    <header className="app-header">
      <nav className="app-nav">
        <Link to={"/"} className="app-logo">
          <img src={Logo} alt="Argent Bank Logo" className="app-logo-image" />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        {data ? (
          <div className="app-nav-block-items">
            <Link to={"/profile"} className="app-nav-item">
              <FontAwesomeIcon icon={faUserCircle} size="lg" />
              <span className="nav-icon-name">{data.firstName}</span>
            </Link>
            <Link to={"/"} className="app-nav-item" onClick={logOut}>
              <FontAwesomeIcon icon={faRightFromBracket} size="lg" />
              <span className="nav-icon-name">Sign out</span>
            </Link>
          </div>
        ) : (
          <div className="app-nav-block-items">
            <Link to={"/login"} className="app-nav-item">
              <FontAwesomeIcon icon={faUserCircle} size="lg" />
              <span className="nav-icon-name">Sign In</span>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
