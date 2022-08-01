import * as AuthActionCreators from "../../components/auth/Login/action";
import * as RegActionCreators from "../../components/auth/Register/actions";
import * as AdvActionCreators from "../../components/Home/actions";
import * as AdvActionLike from "../../components/Like/actions";
import * as ProfileActionCreators from "../../components/UserData/actions";

const actions = {
  ...AuthActionCreators,
  ...RegActionCreators,
  ...AdvActionCreators,
  ...AdvActionLike,
  ...ProfileActionCreators
};

export default actions;
