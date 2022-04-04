import { combineReducers } from "redux";
//authenticaion
import { loginReducer } from "@presentation/screens/authentication/Login/redux/reducer";
//home
import { userDetailReducer } from "@presentation/screens/home/UserDetail/redux/reducer";
import { userListReducer } from "@presentation/screens/home/Users/redux/reducer";


const appReducer = combineReducers({
  //authenticaion
  login: loginReducer,

  //home
  userDetail: userDetailReducer,
  userList: userListReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "LOGIN_CLEAR") {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

export default rootReducer;
