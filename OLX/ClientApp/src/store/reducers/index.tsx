import { combineReducers } from "redux";
import { authReducer } from "../../components/auth/Login/reducer";
import { advReducer } from "../../components/Home/reducer";



export const rootReducer = combineReducers({
  
  auth: authReducer,
  adv: advReducer,
 
});

export type RootState = ReturnType<typeof rootReducer>;
