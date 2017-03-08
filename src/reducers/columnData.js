import * as ActionTypes from '../actions/constants';

/** the initial state regarding columnData  */
export const initialAuthState = {
  loading: false,
  error: false,
  data: {},
};

/**
 * handles columnData state
 * 
 * @param {object} state    the current state object
 * @param {object} action   the action, this reducer handles action of type 
 * ActionTypes.GET_COLUMN_DATA, ActionTypes.GET_COLUMN_DATA_RECEIVED, ActionTypes.GET_COLUMN_DATA_ERROR
 * 
 * @returns {object}        the new state
 */
const columnDataReducer = (state = initialAuthState, action) => {
  switch (action.type) {
    case ActionTypes.GET_COLUMN_DATA:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case ActionTypes.GET_COLUMN_DATA_RECEIVED:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.data,
      };
    case ActionTypes.GET_COLUMN_DATA_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default columnDataReducer;
