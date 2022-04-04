export const ADD_USER_START = "ADD_USER_START";
export const ADD_USER_SUCCESS = "ADD_USER_SUCCESS";
export const ADD_USER_FAIL = "ADD_USER_FAIL";

export const addUserStart = (payload) => {
  return {
    type: ADD_USER_START,
    payload,
  };
};

export const addUserSuccess = (payload) => ({
  type: ADD_USER_SUCCESS,
  payload,
});

export const addUserFail = (payload) => ({
  type: ADD_USER_FAIL,
  payload,
});
