import * as ActionTypes from '../actions/constants';

export const initialAuthState = {
  authtoken: false,
};

const authReducer = (state = initialAuthState, action) => {
  switch (action.type) {
    case ActionTypes.SET_AUTHTOKEN:
      return {
        ...state,
        authtoken: action.authtoken,
      };
    default:
      return state;
  }
};

export default authReducer;
