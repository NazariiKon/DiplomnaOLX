import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router";
import "bootstrap";

import "./message.css";



const message = () => {
  return (
    <>
      <div className="accordion filter" id="accordionExample">
        <div className="">
          <h2 className="accordion-header" id="headingOne">
            <div className="row p-4">
              <div className="col-9">
                <a
                  className="text-menu ext-decoration-none text-reset"
                >
                  Повідомлення
                  
                </a>
              </div>
            </div>
          </h2>
        </div>
      </div>
    </>
  );
};
export default message;
