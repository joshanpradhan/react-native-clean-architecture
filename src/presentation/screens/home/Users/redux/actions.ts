export const USER_LIST_START = "USER_LIST_START";
export const USER_LIST_SUCCESS = "USER_LIST_SUCCESS";
export const USER_LIST_FAIL = "USER_LIST_FAIL";

export const userListStart = (payload) => {
  return {
    type: USER_LIST_START,
    payload,
  };
};

export const userListSuccess = (payload) => ({
  type: USER_LIST_SUCCESS,
  payload,
});

export const userListFail = (payload) => ({
  type: USER_LIST_FAIL,
  payload,
});

