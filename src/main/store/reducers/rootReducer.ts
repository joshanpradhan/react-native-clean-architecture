//authenticaion
import loginReducer from "@presentation/screens/authentication/Login/redux/loginSlice";
//home
import userDetailReducer from "@presentation/screens/home/UserDetail/redux/userDetailSlice";
import userListReducer from "@presentation/screens/home/Users/redux/userListSlice";
import addUserReducer from "@presentation/screens/home/AddUser/redux/addUserSlice";

const rootReducer = {
  //authenticaion
  login: loginReducer,

  //home
  userDetail: userDetailReducer,
  userList: userListReducer,
  addUser: addUserReducer,
};

export default rootReducer;
