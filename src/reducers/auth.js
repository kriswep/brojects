import * as ActionTypes from '../actions/constants';

/** the initial state regarding authentification  */
export const initialAuthState = {
  authtoken: false,
};

/**
 * handles authentification state
 * 
 * @param {object} state    the current state object
 * @param {object} action   the action, this reducer handles action of type ActionTypes.SET_AUTHTOKEN
 * 
 * @returns {object}        the new state
 */
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
