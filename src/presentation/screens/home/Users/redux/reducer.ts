import {
 USER_LIST_START,
USER_LIST_SUCCESS,
USER_LIST_FAIL
} from "./actions";

const initialState = {
  isLoading: false,
  userList: [],	
  error: null,
};

export const userListReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_LIST_START:
      return {
        ...state,
        isLoading: true,
      };

    case USER_LIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
       userList: payload,  
      };
    case USER_LIST_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    
    default:
      return state;
  }
};
