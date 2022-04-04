import {
 USER_DETAIL_START,
USER_DETAIL_SUCCESS,
USER_DETAIL_FAIL
} from "./actions";

const initialState = {
  isLoading: false,
  userDetail: null,	
  error: null,
};

export const userDetailReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_DETAIL_START:
      return {
        ...state,
        isLoading: true,
      };

    case USER_DETAIL_SUCCESS:
      return {
        ...state,
        isLoading: false,
       userDetail: payload,  
      };
    case USER_DETAIL_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    
    default:
      return state;
  }
};
