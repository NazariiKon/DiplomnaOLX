import * as AuthActionCreators from "../../components/auth/Login/action";
import * as RegActionCreators from "../../components/auth/Register/actions";
import * as AdvActionCreators from "../../components/Home/actions";
import * as AdvActionLike from "../../components/Like/actions";

const actions = {
  ...AuthActionCreators,
  ...RegActionCreators,
  ...AdvActionCreators,
  ...AdvActionLike
};

export default actions;
