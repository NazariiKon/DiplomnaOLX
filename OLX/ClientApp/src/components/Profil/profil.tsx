import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router";
import "bootstrap";
import Search from "../Search/search";
import "./profil.css";
import user from "../../images/Woman.jpg";
import like from "../../images/icon/like.png";
import dislike from "../../images/icon/dislike.png";

const profil: React.FC = () => {
  return (
    <>
      <div className="row">
        <div className="">
          <Search />
        </div>
      </div>

      <div>
        <div className="row ">
          <div className="col-3 user ">
            <img src={user} className="rounded-circle" alt="user">
            </img>
              
          </div>
          <div className="col-9">
            <div className="inf">
              <p className="user_name">shtiher_nex</p>
              <div className="user_inf">
              
              <img className = "img_lik" src ={like} ></img>10             
              <img className = "img_lik" src ={dislike} ></img>0
              <p >125 підписників</p>
              <p >Був(-ла) в мережі 12 хв. тому</p>
                
              </div>
            </div>
            
          </div>
        </div>
        <div className="row">
          
          <div className="mt-5">
          <code className="text-rec mx-5">Мої товари</code>
          <code className="text-rec-gray mx-5">Відгуки</code>
          <code className="text-rec-gray mx-5">Підписки</code>
        </div>
        </div>
      </div>
    </>
  );
};

export default profil;
