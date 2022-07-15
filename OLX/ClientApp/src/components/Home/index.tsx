import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router";
import "bootstrap";
import logo from "../../images/logoo.png";
import works from "../../images/icon/works.png";
import jobs from "../../images/icon/jobs.png";
import car from "../../images/icon/car.png";
import hous from "../../images/icon/house_line.png";
import mouse from "../../images/icon/mouse.png";
import shirt from "../../images/icon/t_shirt.png";
import coffee from "../../images/icon/coffee.png";
import ring from "../../images/icon/ring.png";
import pazle from "../../images/icon/pazle.png";
import card from "../../images/ph2.png";
import card_plas from "../../images/icon/plas_to.png";
import card_h from "../../images/icon/h_to.png";
import "./style.css";
import Card from "../Card/card";
import Nav2 from "../Nav2/nav2";
import Menu from "../menu/menu";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Головна</title>
      </Helmet>

      <div className="container active">
        <div className="row">
          <div className="col-3 rounded-3 border border-warning">
            <Menu/>            
          </div>
          <div className="col-9">
            <div className="row">
              <div className="container">
                <form className="d-flex">
                  <input
                    className="form-control me-2 border-warning"
                    type="search"
                    placeholder="Пошук"
                    aria-label="Пошук"
                  />
                </form>
                <div>
                  <a href="/register">
                    <img className="baner" src={logo} alt="baner"></img>
                  </a>
                  <div className="text_karesel">VIP-оголошення</div>
                  <Card />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Nav2 />
            <div>
              <Card />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HomePage;
