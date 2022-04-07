import {
  userListPending,
  userListSuccess,
  userListFail,
} from "./userListSlice";
import { showMessage } from "react-native-flash-message";
export const userList =({ loadUserList }) =>
  async (dispatch) => {
    try {
      dispatch(userListPending());
      const result = await loadUserList.loadAll();
      if (result.data !== null) return dispatch(userListSuccess(result.data));
    } catch (error) {
      showMessage({
        message: `${error}`,
        type: "danger",
      });
      dispatch(userListFail(error));
    }
  };
