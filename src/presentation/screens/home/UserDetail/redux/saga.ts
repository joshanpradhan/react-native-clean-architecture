import { call, delay, put, takeLatest } from "redux-saga/effects";
import { USER_DETAIL_START } from "./actions";
import { userDetailSuccess, userDetailFail } from "./actions";
import { showMessage } from "react-native-flash-message";

//serializing the payload into binary and submittin data to requestProto function with additional data
export function* userDetail({ payload }) {
	try {
		//in call method we pass call(function,args for function)
		// const response = yield call(requestProto,payload);
		// if (response.statusCode) {
			
		// } else {
			
		// }
	} catch (e) {
		yield put(userDetailFail(e));
		showMessage({
			message: "Error from server or check your credentials!",
			type: "danger",
		});
	}
}

export default function* userDetailSaga() {
	yield takeLatest(USER_DETAIL_START, userDetail);
}
