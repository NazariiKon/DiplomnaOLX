import { combineReducers } from "redux";
import { authReducer } from "../../components/auth/Login/reducer";
import { advReducer } from "../../components/Home/reducer";
import { profileReducer } from '../../components/UserData/reducer';



export const rootReducer = combineReducers({
  
  auth: authReducer,
  adv: advReducer,
  profile: profileReducer,

});

export type RootState = ReturnType<typeof rootReducer>;
