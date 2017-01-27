import * as ActionTypes from '../actions/constants';

import reposReducer, { initialReposState } from './repos';

const fixture = {
  some: 'object',
};

describe('Repos Reducers', () => {
  describe('columnDataReducer', () => {
    it('should return the initial state', () => {
      expect(reposReducer(undefined, {})).toEqual(initialReposState);
    });

    it('should handle the GET_REPOS action', () => {
      const expectedState = {
        loading: true,
        error: false,
        data: {},
      }
      expect(
        reposReducer(undefined, {
          type: ActionTypes.GET_REPOS,
        })
      ).toEqual(expectedState);
    });

    it('should handle the GET_REPOS action with prev state', () => {
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
        reposReducer(prevState, {
          type: ActionTypes.GET_REPOS,
        })
      ).toEqual(expectedState);
    });

    it('should handle the GET_REPOS_RECEIVED action', () => {
      const expectedState = {
        loading: false,
        error: false,
        data: fixture,
      }
      expect(
        reposReducer(undefined, {
          type: ActionTypes.GET_REPOS_RECEIVED,
          data: fixture,
        })
      ).toEqual(expectedState);
    });

    it('should handle the GET_REPOS_RECEIVED action with prev state', () => {
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
        reposReducer(prevState, {
          type: ActionTypes.GET_REPOS_RECEIVED,
          data: fixture
        })
      ).toEqual(expectedState);
    });

    it('should handle the GET_REPOS_ERROR action', () => {
      const expectedState = {
        loading: false,
        error: fixture,
        data: {},
      }
      expect(
        reposReducer(undefined, {
          type: ActionTypes.GET_REPOS_ERROR,
          error: fixture,
        })
      ).toEqual(expectedState);
    });

    it('should handle the GET_REPOS_ERROR action with prev state', () => {
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
        reposReducer(prevState, {
          type: ActionTypes.GET_REPOS_ERROR,
          error: fixture,
        })
      ).toEqual(expectedState);
    });

  });
});
