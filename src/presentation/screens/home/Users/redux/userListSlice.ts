import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userList: [],
  isLoading: false,
  error: "",
};

const userListSlice = createSlice({
  name: "userList",
  initialState,
  reducers: {
    userListPending: (state) => {
      state.isLoading = true;
    },
    userListSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.userList = payload;
      state.error = "";
    },
    userListFail: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});
const { reducer, actions } = userListSlice;

export const {
  userListPending,
  userListSuccess,
  userListFail,
} = actions;

export default reducer;