import { combineReducers } from 'redux'

import * as ActionTypes from '../actions/constants';

export const initialAuthState = {
  authToken: false
};

export const authReducer = (state = {
  authToken: false
}, action) => {
  switch (action.type) {
    case ActionTypes.SET_AUTHTOKEN:
      return {
        ...state,
        authToken: action.authToken,
      };
    default:
      return state;
  }
}