import { addUserPending, addUserSuccess, addUserFail } from "./addUserSlice";
import { showMessage } from "react-native-flash-message";
export const addUser =
  ({ user, name, job }) =>
  async (dispatch) => {
    try {
      dispatch(addUserPending());
      const result = await user.add({
        name: name,
        job: job,
      });
      if (result.data !== null) {
        showMessage({
          message: "New user added successfully!",
          type: "success",
        });
        return dispatch(addUserSuccess(result.data));
      }
    } catch (error) {
      showMessage({
        message: `${error}`,
        type: "danger",
      });
      dispatch(addUserFail(error));
    }
  };
