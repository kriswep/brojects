import * as ActionTypes from '../actions/constants';

import cardsReducer, { initialCardsState } from './cards';

const fixture = {
  some: 'object',
};

describe('Column Reducers', () => {
  describe('columnsReducer', () => {
    it('should return the initial state', () => {
      expect(cardsReducer(undefined, {})).toEqual(initialCardsState);
    });

    it('should handle the GET_CARDS action', () => {
      const expectedState = {
        loading: true,
        error: false,
        data: {},
      }
      expect(
        cardsReducer(undefined, {
          type: ActionTypes.GET_CARDS,
        })
      ).toEqual(expectedState);
    });

    it('should handle the GET_CARDS action with prev state', () => {
      const prevState = {
        loading: false,
        error: false,
        data: fixture,
      };
      const expectedState = {
        loading: true,
        error: false,
        data: fixture,
      }
      expect(
        cardsReducer(prevState, {
          type: ActionTypes.GET_CARDS,
        })
      ).toEqual(expectedState);
    });

    it('should handle the GET_CARDS_RECEIVED action', () => {
      const expectedState = {
        loading: false,
        error: false,
        data: fixture,
      }
      expect(
        cardsReducer(undefined, {
          type: ActionTypes.GET_CARDS_RECEIVED,
          data: fixture,
        })
      ).toEqual(expectedState);
    });

    it('should handle the GET_CARDS_RECEIVED action with prev state', () => {
      const prevState = {
        loading: true,
        error: true,
        data: {
          old: 'col',
        },
      };
      const expectedState = {
        loading: false,
        error: false,
        data: fixture,
      }
      expect(
        cardsReducer(prevState, {
          type: ActionTypes.GET_CARDS_RECEIVED,
          data: fixture
        })
      ).toEqual(expectedState);
    });

    it('should handle the GET_CARDS_ERROR action', () => {
      const expectedState = {
        loading: false,
        error: fixture,
        data: {},
      }
      expect(
        cardsReducer(undefined, {
          type: ActionTypes.GET_CARDS_ERROR,
          error: fixture,
        })
      ).toEqual(expectedState);
    });

    it('should handle the GET_CARDS_ERROR action with prev state', () => {
      const prevState = {
        loading: false,
        error: {
          old: 'err',
        },
        data: {},
      };
      const expectedState = {
        loading: false,
        error: fixture,
        data: {},
      }
      expect(
        cardsReducer(prevState, {
          type: ActionTypes.GET_CARDS_ERROR,
          error: fixture,
        })
      ).toEqual(expectedState);
    });

  });
});
