import * as ActionTypes from '../actions/constants';

export const initialAuthState = {
  loading: false,
  error: false,
  data: {},
};

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
