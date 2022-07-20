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
import logo from "../../../images/logo.png";
import house from "../../../images/icon/house.png";
import shop from "../../../images/icon/shop.png";
import per from "../../../images/icon/per.png";
import prof from "../../../images/icon/prof.png";
import h from "../../../images/icon/h.png";
import ukr from "../../../images/icon/ukr.png";
import eng from "../../../images/icon/eng.png";
import bels from "../../../images/icon/bels.png";
import settings from "../../../images/icon/settings.png";

const DefaultHeader = () => {
  const { isAuth } = useTypedSelector((store) => store.auth);
  const {
    user: { image, roles },
  } = useTypedSelector((store) => store.auth);
  const { LogoutUser } = useActions();

  return (
    <nav className="navbar navbar-expand-sm rounded-3 border border-warning ">
      <div className="container-fluid">
        <div className="d-grid gap-2 d-md-block">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <img className="heder-logo" src={logo}></img>
            </Link>
          </div>
          {/* <div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="navbarContent"
              aria-controls="navbarContent"
              aria-expanded="false"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
          </div> */}
        </div>
        <div className="d-grid gap-2 mx-auto ">
          <div className="container">
            <Link className="navbar-brand" to="/">
              <img className="heder-logo " src={house}></img>
            </Link>

            <Link className="navbar-brand" to="/shop">
              <img className="heder-logo2" src={shop}></img>
            </Link>

            <Link className="navbar-brand" to="/per">
              <img className="heder-logo2" src={per}></img>
            </Link>
            
            <Link className="navbar-brand" to="/login">
                <img className="heder-logo2" src={prof}></img>
              </Link>

            <Link className="navbar-brand" to="/like">
              <img className="heder-logo2" src={h}></img>
            </Link>
          </div>
        </div>
        <div className="d-grid gap-2">
          <div className="container nav-brand">
            <Link className="navbar-brand" to="/#">
              <img src={ukr}></img>
            </Link>
            <Link className="navbar-brand" to="/#">
              <img src={eng}></img>
            </Link>
          </div>
        </div>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <Link className="nav-link" to="/register">
            <img className="heder-logo" src={bels}></img>
          </Link>
          <Link className="nav-link" to="/login">
            <img className="heder-logo" src={settings}></img>
          </Link>
          {isAuth ? (<Link
              className="navbar-brand"
              to="/"
              onClick={() => {
                LogoutUser();
              }}
            ><FontAwesomeIcon className="heder-logo2" icon={faSignOutAlt} size={"1x"} /></Link>
            ) : (<div/>)}
        </div>
      </div>
    </nav>
  );
};

export default DefaultHeader;
