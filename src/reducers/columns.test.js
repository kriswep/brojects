import * as ActionTypes from '../actions/constants';

import columnsReducer, { initialAuthState } from './columns';

const fixture = {
  some: 'object',
};

describe('Column Reducers', () => {
  describe('columnsReducer', () => {
    it('should return the initial state', () => {
      expect(columnsReducer(undefined, {})).toEqual(initialAuthState);
    });

    it('should handle the GET_COLUMNS action', () => {
      const expectedState = {
        loading: true,
        error: false,
        data: {},
      }
      expect(
        columnsReducer(undefined, {
          type: ActionTypes.GET_COLUMNS,
        })
      ).toEqual(expectedState);
    });

    it('should handle the GET_COLUMNS action with prev state', () => {
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
        columnsReducer(prevState, {
          type: ActionTypes.GET_COLUMNS,
        })
      ).toEqual(expectedState);
    });

    it('should handle the GET_COLUMNS_RECEIVED action', () => {
      const expectedState = {
        loading: false,
        error: false,
        data: fixture,
      }
      expect(
        columnsReducer(undefined, {
          type: ActionTypes.GET_COLUMNS_RECEIVED,
          data: fixture,
        })
      ).toEqual(expectedState);
    });

    it('should handle the GET_COLUMNS_RECEIVED action with prev state', () => {
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
        columnsReducer(prevState, {
          type: ActionTypes.GET_COLUMNS_RECEIVED,
          data: fixture
        })
      ).toEqual(expectedState);
    });

    it('should handle the GET_COLUMNS_ERROR action', () => {
      const expectedState = {
        loading: false,
        error: fixture,
        data: {},
      }
      expect(
        columnsReducer(undefined, {
          type: ActionTypes.GET_COLUMNS_ERROR,
          error: fixture,
        })
      ).toEqual(expectedState);
    });

    it('should handle the GET_COLUMNS_ERROR action with prev state', () => {
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
        columnsReducer(prevState, {
          type: ActionTypes.GET_COLUMNS_ERROR,
          error: fixture,
        })
      ).toEqual(expectedState);
    });

  });
});
