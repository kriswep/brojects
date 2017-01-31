import * as ActionTypes from './constants';

import {
  getProjects,
  getProjectsReceived,
  getProjectsError,
} from '../actions/projects';

describe('Projects Actions', () => {
  describe('getProjects', () => {
    it('should return the correct type', () => {
      const fixture = 'repoFullName';
      const expectedResult = {
        type: ActionTypes.GET_PROJECTS,
        repoFullName: fixture,
      };

      expect(getProjects(fixture)).toEqual(expectedResult);
    });
  });

  describe('getProjectsReceived', () => {
    it('should return the correct type', () => {
      const fixture = {
        repos: 'repo'
      };
      const expectedResult = {
        type: ActionTypes.GET_PROJECTS_RECEIVED,
        data: fixture,
      };

      expect(getProjectsReceived(fixture)).toEqual(expectedResult);
    });
  });

  describe('getProjectsError', () => {
    it('should return the correct type', () => {
      const fixture = {
        error: 'err'
      };
      const expectedResult = {
        type: ActionTypes.GET_PROJECTS_ERROR,
        error: fixture,
      };

      expect(getProjectsError(fixture)).toEqual(expectedResult);
    });
  });
});
