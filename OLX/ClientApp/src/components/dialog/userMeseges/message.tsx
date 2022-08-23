import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router";
import "bootstrap";
import "../user/user.css"
import User from "../user/user";

import "./message.css";

const message = () => {
  return (
    <>
      <div className="accordion filter" id="accordionExample">
        <div className="">          
            <div className="row p-4">
              <div className="col-9">
                <div className="text-menu ext-decoration-none text-reset">
                  Повідомлення  
                                  
                </div>
                <User/>
              </div>
            </div>          
        </div>
      </div>
    </>
  );
};
export default message;
