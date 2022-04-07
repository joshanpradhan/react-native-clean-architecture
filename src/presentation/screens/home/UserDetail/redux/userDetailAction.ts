import {
  userDetailPending,
  userDetailSuccess,
  userDetailFail,
} from "./userDetailSlice";
import { showMessage } from "react-native-flash-message";
export const userDetail =
  ({ loadUserDetail }) =>
  async (dispatch) => {
    try {
      dispatch(userDetailPending());
      const result = await loadUserDetail.load();
      if (result.data !== null) return dispatch(userDetailSuccess(result.data));
    } catch (error) {
      showMessage({
        message: `${error}`,
        type: "danger",
      });
      dispatch(userDetailFail(error));
    }
  };
