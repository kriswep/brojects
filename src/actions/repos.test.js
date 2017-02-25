import * as ActionTypes from './constants';

import {
  getRepos,
  getReposReceived,
  getReposError,
  setCurrentRepo,
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

  describe('setCurrentRepo', () => {
    it('should return the correct type', () => {
      const fixture = '123';
      const expectedResult = {
        type: ActionTypes.SET_CURRENT_REPO,
        repoId: Number(fixture),
      };

      expect(setCurrentRepo(fixture)).toEqual(expectedResult);
    });
    it('should accept numbers only', () => {
      const fixture = 'string';
      const expectedResult = {
        type: ActionTypes.SET_CURRENT_REPO,
        repoId: Number(fixture),
      };

      expect(setCurrentRepo(fixture)).toEqual(expectedResult);
    });
  });
});
