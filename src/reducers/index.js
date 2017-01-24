import { combineReducers } from 'redux'

import * as ActionTypes from '../actions/constants';

export const initialAuthState = {
  authtoken: false
};

export const authReducer = (state = {
  authtoken: false
}, action) => {
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

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
