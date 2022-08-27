import { combineReducers } from "redux";
import { authReducer } from "../../components/auth/Login/reducer";
import { advReducer } from "../../components/Home/reducer";
import { cartReducer } from "../../components/Like/reducer";
import { profileReducer } from '../../components/UserData/reducer';
import { categoryReducer } from '../../components/menu/reducer';



export const rootReducer = combineReducers({
  auth: authReducer,
  adv: advReducer,
  profile: profileReducer,
  like: cartReducer,
  category: categoryReducer
});

export type RootState = ReturnType<typeof rootReducer>;
