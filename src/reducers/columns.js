import * as ActionTypes from '../actions/constants';

export const initialAuthState = {
  loading: false,
  error: false,
  data: {},
};

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
