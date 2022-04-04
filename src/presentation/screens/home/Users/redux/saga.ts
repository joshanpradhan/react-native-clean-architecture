import { call, delay, put, takeLatest } from "redux-saga/effects";
import { USER_LIST_START } from "./actions";
import { userListSuccess, userListFail } from "./actions";
import { showMessage } from "react-native-flash-message";

//serializing the payload into binary and submittin data to requestProto function with additional data
export function* userList({ payload }) {
	try {
		//in call method we pass call(function,args for function)
		// const response = yield call(requestProto,payload);
		// if (response.statusCode) {
			
		// } else {
			
		// }
	} catch (e) {
		yield put(userListFail(e));
		showMessage({
			message: "Error from server or check your credentials!",
			type: "danger",
		});
	}
}

export default function* userListSaga() {
	yield takeLatest(USER_LIST_START, userList);
}
