import * as ActionTypes from './actions/constants';
import api from './api';
debugger;
const createFakeStore = fakeData => ({
  getState() {
    return fakeData;
  }
});

const dispatchWithStoreOf = (request, storeData, action, thenAction) => {
  let dispatched = null;
  const dispatch = api(request)(createFakeStore(storeData))
    (actionAttempt => dispatched = actionAttempt);
  dispatch(action)
    .then((value) => {
      thenAction(value);
    })
    .catch((value) => {
      thenAction(value);
    });
  return dispatched;
}


describe('Api middleware', () => {

  it('should pass other actions', (done) => {
    const action = {
      type: ActionTypes.SET_AUTHTOKEN,
    }

    expect(
      dispatchWithStoreOf({}, {}, action, () => { done() })
    ).toEqual(action)
  });


  describe('GET_COLUMNS', () => {
    it('should format the response correctly on success', (done) => {
      const action = {
        type: ActionTypes.GET_COLUMNS,
        projectId: 'projectId',
      }
      const store = {
        auth: {
          authtoken: 'secret',
        }
      };
      const request = jest.fn();
      request.mockReturnValue(Promise.resolve({ columns: 'something' }));
      const expectedReturn = {
        type: ActionTypes.GET_COLUMNS_RECEIVED,
        data: { columns: 'something' },
      };


      dispatchWithStoreOf(request, store, action, (returnValue) => {
        expect(returnValue).toEqual(expectedReturn);
        done();
      });

      expect(request.mock.calls[0][0].indexOf('api.github.com/projects/projectId/columns') > 0).toBe(true);


    });

    it('should handle error', (done) => {
      const action = {
        type: ActionTypes.GET_COLUMNS,
        projectId: 'projectId',
      }
      const store = {
        auth: {
          authtoken: 'secret',
        }
      };
      const request = jest.fn();
      request.mockReturnValue(
        new Promise((resolve, reject) => {
          const err = {
            response: {
              statusText: 'whoops',
            }
          }
          reject(err);
        })
      );
      const expectedReturn = {
        type: ActionTypes.GET_COLUMNS_ERROR,
        error: 'whoops',
      };

      dispatchWithStoreOf(request, store, action, (returnValue) => {
        expect(returnValue).toEqual(expectedReturn);
        expect(returnValue.error).toBeDefined();
        done();
      });

      expect(request.mock.calls[0][0].indexOf('api.github.com/projects/projectId/columns') > 0).toBe(true);

    });

  });


  describe('GET_COLUMN_DATA', () => {
    it('should format the response correctly on success', (done) => {
      const action = {
        type: ActionTypes.GET_COLUMN_DATA,
        columnId: 'columnId',
      }
      const store = {
        auth: {
          authtoken: 'secret',
        }
      };
      const request = jest.fn();
      request.mockReturnValue(Promise.resolve({ col: 'something' }));
      // const options = {
      //   headers: new Headers({
      //     Accept: 'application/vnd.github.inertia-preview+json',
      //     Authorization: 'token secret',
      //   }),
      // };
      const expectedReturn = {
        type: ActionTypes.GET_COLUMN_DATA_RECEIVED,
        data: { col: 'something' },
      };


      dispatchWithStoreOf(request, store, action, (returnValue) => {
        expect(returnValue).toEqual(expectedReturn);
        done();
      });

      expect(request.mock.calls[0][0].indexOf('api.github.com/projects/columns/columnId') > 0).toBe(true);


    });

    it('should handle error', (done) => {
      const action = {
        type: ActionTypes.GET_COLUMN_DATA,
        columnId: 'columnId',
      }
      const store = {
        auth: {
          authtoken: 'secret',
        }
      };
      const request = jest.fn();
      request.mockReturnValue(
        new Promise((resolve, reject) => {
          const err = {
            response: {
              statusText: 'whoops',
            }
          }
          reject(err);
        })
      );
      const expectedReturn = {
        type: ActionTypes.GET_COLUMN_DATA_ERROR,
        error: 'whoops',
      };

      dispatchWithStoreOf(request, store, action, (returnValue) => {
        expect(returnValue).toEqual(expectedReturn);
        expect(returnValue.error).toBeDefined();
        done();
      });

      expect(request.mock.calls[0][0].indexOf('api.github.com/projects/columns/columnId') > 0).toBe(true);

    });

  });


  describe('GET_REPOS', () => {
    it('should format the response correctly on success', (done) => {
      const action = {
        type: ActionTypes.GET_REPOS,
      }
      const store = {
        auth: {
          authtoken: 'secret',
        }
      };
      const request = jest.fn();
      request.mockReturnValue(Promise.resolve({ repo: 'something' }));
      const expectedReturn = {
        type: ActionTypes.GET_REPOS_RECEIVED,
        data: { repo: 'something' },
      };


      dispatchWithStoreOf(request, store, action, (returnValue) => {
        expect(returnValue).toEqual(expectedReturn);
        done();
      });

      expect(request.mock.calls[0][0].indexOf('api.github.com/user/repos') > 0).toBe(true);


    });

    it('should handle error', (done) => {
      const action = {
        type: ActionTypes.GET_REPOS,
      }
      const store = {
        auth: {
          authtoken: 'secret',
        }
      };
      const request = jest.fn();
      request.mockReturnValue(
        new Promise((resolve, reject) => {
          const err = {
            response: {
              statusText: 'whoops',
            }
          }
          reject(err);
        })
      );
      const expectedReturn = {
        type: ActionTypes.GET_REPOS_ERROR,
        error: 'whoops',
      };

      dispatchWithStoreOf(request, store, action, (returnValue) => {
        expect(returnValue).toEqual(expectedReturn);
        expect(returnValue.error).toBeDefined();
        done();
      });

      expect(request.mock.calls[0][0].indexOf('api.github.com/user/repos') > 0).toBe(true);

    });

  });




  describe('GET_PROJECTS', () => {
    it('should format the response correctly on success with repo specified in action', (done) => {
      const action = {
        type: ActionTypes.GET_PROJECTS,
        repoFullName: 'repoFullName',
      }
      const store = {
        auth: {
          authtoken: 'secret',
        }
      };
      const request = jest.fn();
      request.mockReturnValue(Promise.resolve({ project: 'something' }));
      const expectedReturn = {
        type: ActionTypes.GET_PROJECTS_RECEIVED,
        data: { project: 'something' },
      };

      dispatchWithStoreOf(request, store, action, (returnValue) => {
        expect(returnValue).toEqual(expectedReturn);
        done();
      });

      expect(request.mock.calls[0][0].indexOf('api.github.com/repos/repoFullName/projects') > 0).toBe(true);


    });

    it('should format the response correctly on success with repo specified in store', (done) => {
      const action = {
        type: ActionTypes.GET_PROJECTS,
        // repoFullName: 'repoFullName',
      }
      const store = {
        auth: {
          authtoken: 'secret',
        },
        repos: {
          currentRepo: {
            full_name: 'repoFullName',
          },
        }
      };
      const request = jest.fn();
      request.mockReturnValue(Promise.resolve({ project: 'something' }));
      const expectedReturn = {
        type: ActionTypes.GET_PROJECTS_RECEIVED,
        data: { project: 'something' },
      };

      dispatchWithStoreOf(request, store, action, (returnValue) => {
        expect(returnValue).toEqual(expectedReturn);
        done();
      });

      expect(request.mock.calls[0][0].indexOf('api.github.com/repos/repoFullName/projects') > 0).toBe(true);


    });

    it('should handle error', (done) => {
      const action = {
        type: ActionTypes.GET_PROJECTS,
        repoFullName: 'repoFullName',
      }
      const store = {
        auth: {
          authtoken: 'secret',
        }
      };
      const request = jest.fn();
      request.mockReturnValue(
        new Promise((resolve, reject) => {
          const err = {
            response: {
              statusText: 'whoops',
            }
          }
          reject(err);
        })
      );
      const expectedReturn = {
        type: ActionTypes.GET_PROJECTS_ERROR,
        error: 'whoops',
      };

      dispatchWithStoreOf(request, store, action, (returnValue) => {
        expect(returnValue).toEqual(expectedReturn);
        expect(returnValue.error).toBeDefined();
        done();
      });

      expect(request.mock.calls[0][0].indexOf('api.github.com/repos/repoFullName/projects') > 0).toBe(true);

    });

  });


  describe('GET_CARDS', () => {
    it('should format the response correctly on success', (done) => {
      const action = {
        type: ActionTypes.GET_CARDS,
        columnId: 'columnId',
      }
      const store = {
        auth: {
          authtoken: 'secret',
        }
      };
      const request = jest.fn();
      request.mockReturnValue(Promise.resolve({ card: 'something' }));
      const expectedReturn = {
        type: ActionTypes.GET_CARDS_RECEIVED,
        data: { card: 'something' },
      };


      dispatchWithStoreOf(request, store, action, (returnValue) => {
        expect(returnValue).toEqual(expectedReturn);
        done();
      });

      expect(request.mock.calls[0][0].indexOf('api.github.com/projects/columns/columnId/cards') > 0).toBe(true);


    });

    it('should handle error', (done) => {
      const action = {
        type: ActionTypes.GET_CARDS,
        columnId: 'columnId',
      }
      const store = {
        auth: {
          authtoken: 'secret',
        }
      };
      const request = jest.fn();
      request.mockReturnValue(
        new Promise((resolve, reject) => {
          const err = {
            response: {
              statusText: 'whoops',
            }
          }
          reject(err);
        })
      );
      const expectedReturn = {
        type: ActionTypes.GET_CARDS_ERROR,
        error: 'whoops',
      };

      dispatchWithStoreOf(request, store, action, (returnValue) => {
        expect(returnValue).toEqual(expectedReturn);
        expect(returnValue.error).toBeDefined();
        done();
      });

      expect(request.mock.calls[0][0].indexOf('api.github.com/projects/columns/columnId/cards') > 0).toBe(true);

    });

  });


});
