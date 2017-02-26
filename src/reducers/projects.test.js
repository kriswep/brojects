import * as ActionTypes from '../actions/constants';

import projectsReducer, { initialProjectsState } from './projects';

const fixture = {
  some: 'project',
};

describe('Projects Reducers', () => {
  describe('projectsReducer', () => {
    it('should return the initial state', () => {
      expect(projectsReducer(undefined, {})).toEqual(initialProjectsState);
    });

    it('should handle the GET_PROJECTS action', () => {
      const expectedState = {
        loading: true,
        error: false,
        data: [],
        currentProject: false,
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
        currentProject: false,
      };
      const expectedState = {
        loading: true,
        error: false,
        data: fixture,
        currentProject: false,
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
        currentProject: false,
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
        currentProject: false,
      };
      const expectedState = {
        loading: false,
        error: false,
        data: fixture,
        currentProject: false,
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
        currentProject: false,
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
        currentProject: false,
      };
      const expectedState = {
        loading: false,
        error: fixture,
        data: [],
        currentProject: false,
      }
      expect(
        projectsReducer(prevState, {
          type: ActionTypes.GET_PROJECTS_ERROR,
          error: fixture,
        })
      ).toEqual(expectedState);
    });

    it('should not SET_CURRENT_PROJECT, when project is not loaded', () => {
      const projectId = 1234;
      const expectedState = {
        loading: false,
        error: 'invalid project',
        data: [],
        currentProject: false,
      }
      expect(
        projectsReducer(undefined, {
          type: ActionTypes.SET_CURRENT_PROJECT,
          projectId,
        })
      ).toEqual(expectedState);
    });

    it('should handle the SET_CURRENT_PROJECT action with prev state', () => {
      const project = {
        id: 1234,
        some: 'project',
        data: {},
      }
      const prevState = {
        loading: false,
        error: {},
        data: [{
            id: 1111,
          },
          project,
          {
            id: 3333,
          }],
        currentProject: false,
      };
      const expectedState = {
        loading: false,
        error: false,
        data: prevState.data,
        currentProject: project,
      }
      expect(
        projectsReducer(prevState, {
          type: ActionTypes.SET_CURRENT_PROJECT,
          projectId: project.id,
        })
      ).toEqual(expectedState);
    });

  });
});
