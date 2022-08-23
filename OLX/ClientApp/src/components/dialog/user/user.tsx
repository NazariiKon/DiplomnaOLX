import React, { Component } from "react";
import "./user.css";

const user = () => {
  return (
    <>
      <div className="w3-container w3-teal badge bg-warning ">
        <img
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPyGNr2qL63Sfugk2Z1-KBEwMGOfycBribew&usqp=CAU"
          }
          className="rounded-circle user "
          alt="user"
        ></img>
        Андрій
      </div>
    </>
  );
};

export default user;
