import * as AuthActionCreators from "../../components/auth/Login/action";
import * as RegActionCreators from "../../components/auth/Register/actions";
import * as AdvActionCreators from "../../components/Home/actions";
import * as AdvActionLike from "../../components/Like/actions";
import * as ProfileActionCreators from "../../components/UserData/actions";
import * as ProfileAdvCreators from "../../components/UserData/Profile/actions";
import * as BasketActionCreators from "../../components/UserData/UserOrders/action";
import * as CategoryAction from "../../components/menu/actions";

const actions = {
  ...AuthActionCreators,
  ...RegActionCreators,
  ...AdvActionCreators,
  ...AdvActionLike,
  ...ProfileActionCreators,
  ...CategoryAction,
  ...ProfileAdvCreators,
  ...BasketActionCreators
};

export default actions;
