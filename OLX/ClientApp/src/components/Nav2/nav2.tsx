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
import "./nav2.css";
import Card from "../Card/card";

const Nav2 = () => {
  return (
    <>
      <ul className="nav justify-content ">
        <li className="nav-item ">
          <a className="nav-link nav2" href="#">
            Рекомендоване
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link nav2" href="#">
            Нове
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link nav2" href="#">
            Вживане
          </a>
        </li>
      </ul>
    </>
  );
};
export default Nav2;
