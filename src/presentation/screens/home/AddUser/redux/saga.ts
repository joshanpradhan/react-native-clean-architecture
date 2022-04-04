import { call, delay, put, takeLatest } from "redux-saga/effects";
import { ADD_USER_START } from "./actions";
import { addUserSuccess, addUserFail } from "./actions";
import { showMessage } from "react-native-flash-message";

export function* addUser({ payload }) {
  try {
    console.log("payload", payload);
    // in call method we pass call(function,args for function)
    const response = yield call(payload);

    console.log("response", response);
    // if (response.statusCode) {

    // } else {

    // }
  } catch (e) {
    console.log("e", e);
    yield put(addUserFail(e));
    showMessage({
      message: "Error from server or check your credentials!",
      type: "danger",
    });
  }
}

export default function* addUserSaga() {
  yield takeLatest(ADD_USER_START, addUser);
}
