import { all } from "redux-saga/effects";
//authenticaion
import loginSaga from "@presentation/screens/authentication/Login/redux/saga";

//home
import userDetailSaga from "@presentation/screens/home/UserDetail/redux/saga";
import userListSaga from "@presentation/screens/home/Users/redux/saga";

export default function* rootSaga() {
  yield all([
    //authenticaion
    loginSaga(),

    //home
    userDetailSaga(),
    userListSaga(),
  ]);
}
