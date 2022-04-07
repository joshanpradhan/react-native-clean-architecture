import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userDetail: {},
  isLoading: false,
  error: "",
};

const userDetailSlice = createSlice({
  name: "userDetail",
  initialState,
  reducers: {
    userDetailPending: (state) => {
      state.isLoading = true;
    },
    userDetailSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.userDetail = payload;
      state.error = "";
    },
    userDetailFail: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});
const { reducer, actions } = userDetailSlice;

export const {
  userDetailPending,
  userDetailSuccess,
  userDetailFail,
} = actions;

export default reducer;