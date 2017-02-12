import * as ActionTypes from './constants';

export const getCards = (columnId) => ({
  type: ActionTypes.GET_CARDS,
  columnId,
});
export const getCardsReceived = (data) => ({
  type: ActionTypes.GET_CARDS_RECEIVED,
  data,
});
export const getCardsError = (error) => ({
  type: ActionTypes.GET_CARDS_ERROR,
  error,
});
