import * as ActionTypes from '../actions/constants';

import reposReducer, { initialReposState } from './repos';

const fixture = {
  some: 'object',
};

describe('Repos Reducers', () => {
  describe('reposReducer', () => {
    it('should return the initial state', () => {
      expect(reposReducer(undefined, {})).toEqual(initialReposState);
    });

    it('should handle the GET_REPOS action', () => {
      const expectedState = {
        loading: true,
        error: false,
        data: [],
        currentRepo: false,
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
        currentRepo: false,
      };
      const expectedState = {
        loading: true,
        error: false,
        data: fixture,
        currentRepo: false,
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
        currentRepo: false,
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
        currentRepo: false,
      };
      const expectedState = {
        loading: false,
        error: false,
        data: fixture,
        currentRepo: false,
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
        data: [],
        currentRepo: false,
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
        data: [],
        currentRepo: false,
      };
      const expectedState = {
        loading: false,
        error: fixture,
        data: [],
        currentRepo: false,
      }
      expect(
        reposReducer(prevState, {
          type: ActionTypes.GET_REPOS_ERROR,
          error: fixture,
        })
      ).toEqual(expectedState);
    });

    it('should not SET_CURRENT_REPO, when repo is not loaded', () => {
      const repoId = 1234;
      const expectedState = {
        loading: false,
        error: 'invalid repo',
        data: [],
        currentRepo: false,
      }
      expect(
        reposReducer(undefined, {
          type: ActionTypes.SET_CURRENT_REPO,
          repoId,
        })
      ).toEqual(expectedState);
    });

    it('should handle the SET_CURRENT_REPO action with prev state', () => {
      const repo = {
        id: 1234,
        some: 'repo',
        data: {},
      }
      const prevState = {
        loading: false,
        error: {},
        data: [{
            id: 1111,
          },
          repo,
          {
            id: 3333,
          }],
        currentRepo: false,
      };
      const expectedState = {
        loading: false,
        error: false,
        data: prevState.data,
        currentRepo: repo,
      }
      expect(
        reposReducer(prevState, {
          type: ActionTypes.SET_CURRENT_REPO,
          repoId: repo.id,
        })
      ).toEqual(expectedState);
    });

  });
});
