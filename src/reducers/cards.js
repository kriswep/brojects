import * as ActionTypes from '../actions/constants';

export const initialCardsState = {
  loading: false,
  error: false,
  data: {},
};

const cardsReducer = (state = initialCardsState, action) => {
  switch (action.type) {
    case ActionTypes.GET_CARDS:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case ActionTypes.GET_CARDS_RECEIVED:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.data,
      };
    case ActionTypes.GET_CARDS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default cardsReducer;
