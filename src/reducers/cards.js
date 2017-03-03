import * as ActionTypes from '../actions/constants';

export const initialCardsState = {
  loading: false,
  error: false,
  data: {},
};


/**
 * cards reducer
 * @param {object} state - the current state object
 * @param {object} action - the action, this reducer handles action of type 
 * ActionTypes.GET_CARDS, ActionTypes.GET_CARDS_RECEIVED, ActionTypes.GET_CARDS_ERROR
 * 
 * @returns {object} - the new state
 */
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
