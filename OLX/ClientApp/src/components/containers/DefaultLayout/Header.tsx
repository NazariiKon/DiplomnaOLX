import { Link } from "react-router-dom";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useActions } from "../../../hooks/useActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faSignOutAlt,
  faUser,
  faUserCog,
} from "@fortawesome/free-solid-svg-icons";
import HeaderCartButton from "../../common/HeaderCartButton/HeaderCartButton";
import HeaderSearch from "../../common/HeaderSearch/HeaderSearch";
import { v4 as uuid } from "uuid";

import "./headers.css";

const DefaultHeader = () => {
  const { isAuth } = useTypedSelector((store) => store.auth);
  const {
    user: { image, roles },
  } = useTypedSelector((store) => store.auth);
  const { LogoutUser } = useActions();

  return (
    <nav className="navbar navbar-expand-lg fixed-top rounded-3 border border-warning">
      <div className="container">
        <div className="grid">
          <div className="row">
            <div className="col-2">
              <div className="container">
                <Link className="navbar-brand" to="/">
                  all in
                </Link>
              </div>
            </div>
            <div className="col-6">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/house">
                    House
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/shop">
                    Shop
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/per">
                    Per
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/prof">
                    Prof
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/like">
                    Like
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-3">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    Українська
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Англійська
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-1">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    Реєстрація
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Вхід
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DefaultHeader;