import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router";
import "bootstrap";
import Search from "../Search/search";
import "./chat.css";
import user from "../../images/Woman.jpg";
import like from "../../images/icon/like.png";
import Message from "./userMeseges/message";

const chat: React.FC = () => {
  return (
    <>
      <div className="">
        <div className="row mx-2">
          <div className="col-3 rounded-3 border-warning pl-5">
            <Message />
          </div>
          <div className="col-9">
            <div className="row">
              <div className="">
                <Search />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default chat;
