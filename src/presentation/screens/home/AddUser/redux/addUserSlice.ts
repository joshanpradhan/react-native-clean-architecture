import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addUser: {},
  isLoading: false,
  error: "",
};

const addUserSlice = createSlice({
  name: "addUser",
  initialState,
  reducers: {
    addUserPending: (state) => {
      state.isLoading = true;
    },
    addUserSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.addUser = payload;
      state.error = "";
    },
    addUserFail: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});
const { reducer, actions } = addUserSlice;

export const { addUserPending, addUserSuccess, addUserFail } = actions;

export default reducer;
