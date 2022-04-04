import { ADD_USER_START, ADD_USER_SUCCESS, ADD_USER_FAIL } from "./actions";

const initialState = {
  isLoading: false,
  addUser: null,
  error: null,
};

export const addUserReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_USER_START:
      return {
        ...state,
        isLoading: true,
      };

    case ADD_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        addUser: payload,
      };
    case ADD_USER_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    default:
      return state;
  }
};
