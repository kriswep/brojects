import * as ActionTypes from '../actions/constants';

import projectsReducer, { initialReposState } from './projects';

const fixture = {
  some: 'project',
};

describe('Projects Reducers', () => {
  describe('projectsReducer', () => {
    it('should return the initial state', () => {
      expect(projectsReducer(undefined, {})).toEqual(initialReposState);
    });

    it('should handle the GET_PROJECTS action', () => {
      const expectedState = {
        loading: true,
        error: false,
        data: [],
        currentRepo: false,
      }
      expect(
        projectsReducer(undefined, {
          type: ActionTypes.GET_PROJECTS,
        })
      ).toEqual(expectedState);
    });

    it('should handle the GET_PROJECTS action with prev state', () => {
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
        projectsReducer(prevState, {
          type: ActionTypes.GET_PROJECTS,
        })
      ).toEqual(expectedState);
    });

    it('should handle the GET_PROJECTS_RECEIVED action', () => {
      const expectedState = {
        loading: false,
        error: false,
        data: fixture,
        currentRepo: false,
      }
      expect(
        projectsReducer(undefined, {
          type: ActionTypes.GET_PROJECTS_RECEIVED,
          data: fixture,
        })
      ).toEqual(expectedState);
    });

    it('should handle the GET_PROJECTS_RECEIVED action with prev state', () => {
      const prevState = {
        loading: true,
        error: true,
        data: {
          old: 'project',
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
        projectsReducer(prevState, {
          type: ActionTypes.GET_PROJECTS_RECEIVED,
          data: fixture
        })
      ).toEqual(expectedState);
    });

    it('should handle the GET_PROJECTS_ERROR action', () => {
      const expectedState = {
        loading: false,
        error: fixture,
        data: [],
        currentRepo: false,
      }
      expect(
        projectsReducer(undefined, {
          type: ActionTypes.GET_PROJECTS_ERROR,
          error: fixture,
        })
      ).toEqual(expectedState);
    });

    it('should handle the GET_PROJECTS_ERROR action with prev state', () => {
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
        projectsReducer(prevState, {
          type: ActionTypes.GET_PROJECTS_ERROR,
          error: fixture,
        })
      ).toEqual(expectedState);
    });

  });
});
