import * as React from "react";


import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";

import CartIcon from "./CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton: React.FC = () => {
  return (
    <button
      className={classes.button}
     
    >
      <span className={classes.icon}>
        <div className="mh-20"><CartIcon /></div>
        
      </span>
      <span>Кошик</span>
      <span className={classes.badge}>2</span>
    </button>
  );
};

export default HeaderCartButton;
