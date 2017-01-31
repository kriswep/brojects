import * as ActionTypes from './constants';

import {
  getRepos,
  getReposReceived,
  getReposError,
} from '../actions/repos';
describe('Repos Actions', () => {
  describe('getRepos', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: ActionTypes.GET_REPOS,
      };

      expect(getRepos()).toEqual(expectedResult);
    });
  });

  describe('getReposReceived', () => {
    it('should return the correct type', () => {
      const fixture = {
        repos: 'repo'
      };
      const expectedResult = {
        type: ActionTypes.GET_REPOS_RECEIVED,
        data: fixture,
      };

      expect(getReposReceived(fixture)).toEqual(expectedResult);
    });
  });

  describe('getReposError', () => {
    it('should return the correct type', () => {
      const fixture = {
        error: 'err'
      };
      const expectedResult = {
        type: ActionTypes.GET_REPOS_ERROR,
        error: fixture,
      };

      expect(getReposError(fixture)).toEqual(expectedResult);
    });
  });
});
