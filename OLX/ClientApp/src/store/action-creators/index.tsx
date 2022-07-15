import * as AuthActionCreators from "../../components/auth/Login/action";
import * as RegActionCreators from "../../components/auth/Register/actions";
import * as AdvActionCreators from "../../components/Home/actions";

const actions = {
  ...AuthActionCreators,
  ...RegActionCreators,
  ...AdvActionCreators
};

export default actions;
