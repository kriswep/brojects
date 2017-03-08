import * as ActionTypes from '../actions/constants';

/** the initial state regarding columns  */
export const initialAuthState = {
  loading: false,
  error: false,
  data: {},
};


/**
 * handles columns state
 * 
 * @param {object} state    the current state object
 * @param {object} action   the action, this reducer handles action of type 
 * ActionTypes.GET_COLUMNS, ActionTypes.GET_COLUMNS_RECEIVED, ActionTypes.GET_COLUMNS_ERROR
 * 
 * @returns {object}        the new state
 */
const columnsReducer = (state = initialAuthState, action) => {
  switch (action.type) {
    case ActionTypes.GET_COLUMNS:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case ActionTypes.GET_COLUMNS_RECEIVED:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.data,
      };
    case ActionTypes.GET_COLUMNS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default columnsReducer;
