
import * as AuthActionCreators from "../../components/auth/Login/action";
import * as RegActionCreators from "../../components/auth/Register/actions";

const actions = {
  ...AuthActionCreators,
  ...RegActionCreators,
  
};

export default actions;
