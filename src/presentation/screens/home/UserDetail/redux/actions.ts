export const USER_DETAIL_START = "USER_DETAIL_START";
export const USER_DETAIL_SUCCESS = "USER_DETAIL_SUCCESS";
export const USER_DETAIL_FAIL = "USER_DETAIL_FAIL";

export const userDetailStart = (payload) => {
  return {
    type: USER_DETAIL_START,
    payload,
  };
};

export const userDetailSuccess = (payload) => ({
  type: USER_DETAIL_SUCCESS,
  payload,
});

export const userDetailFail = (payload) => ({
  type: USER_DETAIL_FAIL,
  payload,
});

