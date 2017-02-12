import * as ActionTypes from './constants';

import {
  getCards,
  getCardsReceived,
  getCardsError,
} from '../actions/cards';

describe('Cards Actions', () => {
  describe('getCards', () => {
    const fixture = 'columnId';
    it('should return the correct type', () => {
      const expectedResult = {
        type: ActionTypes.GET_CARDS,
        columnId: fixture,
      };

      expect(getCards(fixture)).toEqual(expectedResult);
    });
  });

  describe('getCardsReceived', () => {
    it('should return the correct type', () => {
      const fixture = {
        cards: 'card'
      };
      const expectedResult = {
        type: ActionTypes.GET_CARDS_RECEIVED,
        data: fixture,
      };

      expect(getCardsReceived(fixture)).toEqual(expectedResult);
    });
  });

  describe('getCardsError', () => {
    it('should return the correct type', () => {
      const fixture = {
        error: 'err'
      };
      const expectedResult = {
        type: ActionTypes.GET_CARDS_ERROR,
        error: fixture,
      };

      expect(getCardsError(fixture)).toEqual(expectedResult);
    });
  });
});