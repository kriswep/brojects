import * as ActionTypes from '../actions/constants';

import columnDataReducer, { initialAuthState } from './columnData';

const fixture = {
  some: 'object',
};

describe('App Reducers', () => {
  describe('columnDataReducer', () => {
    it('should return the initial state', () => {
      expect(columnDataReducer(undefined, {})).toEqual(initialAuthState);
    });

    it('should handle the GET_COLUMN_DATA action', () => {
      const expectedState = {
        loading: true,
        error: false,
        data: {},
      }
      expect(
        columnDataReducer(undefined, {
          type: ActionTypes.GET_COLUMN_DATA,
        })
      ).toEqual(expectedState);
    });

    it('should handle the GET_COLUMN_DATA action with prev state', () => {
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
        columnDataReducer(prevState, {
          type: ActionTypes.GET_COLUMN_DATA,
        })
      ).toEqual(expectedState);
    });

    it('should handle the GET_COLUMN_DATA_RECEIVED action', () => {
      const expectedState = {
        loading: false,
        error: false,
        data: fixture,
      }
      expect(
        columnDataReducer(undefined, {
          type: ActionTypes.GET_COLUMN_DATA_RECEIVED,
          data: fixture,
        })
      ).toEqual(expectedState);
    });

    it('should handle the GET_COLUMN_DATA_RECEIVED action with prev state', () => {
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
        columnDataReducer(prevState, {
          type: ActionTypes.GET_COLUMN_DATA_RECEIVED,
          data: fixture
        })
      ).toEqual(expectedState);
    });

    it('should handle the GET_COLUMN_DATA_ERROR action', () => {
      const expectedState = {
        loading: false,
        error: fixture,
        data: {},
      }
      expect(
        columnDataReducer(undefined, {
          type: ActionTypes.GET_COLUMN_DATA_ERROR,
          error: fixture,
        })
      ).toEqual(expectedState);
    });

    it('should handle the GET_COLUMN_DATA_ERROR action with prev state', () => {
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
        columnDataReducer(prevState, {
          type: ActionTypes.GET_COLUMN_DATA_ERROR,
          error: fixture,
        })
      ).toEqual(expectedState);
    });

  });
});
