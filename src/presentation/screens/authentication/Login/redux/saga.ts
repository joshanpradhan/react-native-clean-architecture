import { call, delay, put, takeLatest } from "redux-saga/effects";
import { LOGIN_START } from "./actions";
import { loginSuccess, loginFail } from "./actions";
import { showMessage } from "react-native-flash-message";

export function* login({ payload }) {
  const { authentication, email, password } = payload;
  try {
    console.log("Joshan");

    // in call method we pass call(function,args for function)
    const response = yield call(authentication.auth, { email, password });
    console.log("response", response);
    // if (response.statusCode) {

    // } else {

    // }
  } catch (e) {
    console.log("error", e);
    yield put(loginFail(e));
    showMessage({
      message: "Error from server or check your credentials!",
      type: "danger",
    });
  }
}

export default function* loginSaga() {
  yield takeLatest(LOGIN_START, login);
}
