import { loginPending, loginSuccess, loginFail } from "./loginSlice";
import { showMessage } from "react-native-flash-message";

export const login =
  ({ authentication, email, password }) =>
  async (dispatch) => {
    try {
      dispatch(loginPending());
      const result = await authentication.auth({
        email: email,
        password: password,
      });
      if (result.token)
        showMessage({
          message: "Logged In successfully!",
          type: "success",
        });
      return dispatch(loginSuccess(result.token));
    } catch (error) {
      showMessage({
        message: `${error}`,
        type: "danger",
      });
      dispatch(loginFail(error));
    }
  };
