import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router";
import "bootstrap";
import "./st.css";
import card from "../../images/ph2.png";
import card_plas from "../../images/icon/plas_to.png";
import card_h from "../../images/icon/h_to.png";

const Card = () => {
  return (
    <div>
      <div className="card">
        <div className="row">
          <img src={card} className="card-img-top" alt="photo" />
          <div className="card-body col"></div>
          <div className="row">
            <div className=" col-9">
              <h5 className="card-title">Назва</h5>
              <p className="card-text">опис товару</p>
            </div>
            <div className=" col-3 ">
              <a href="#" className="btn ">
                <img src={card_plas} alt="+"></img>
              </a>
              <a href="#" className="btn ">
                <img src={card_h} alt="like"></img>
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <p className="card-text2">300 грн</p>
        </div>
      </div>
    </div>
  );
};
export default Card;
