import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import 'react-mdl/extra/material.css';
import 'react-mdl/extra/css/material.indigo-pink.min.css';
import 'react-mdl/extra/material.js';

import { App, mapStateToProps, mapDispatchToProps } from './App';

describe('App', () => {
  describe('rendering', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<App />, div);
    });

    it('renders a Header', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.find('header').hasClass('App-header')).toBe(true);
    });
  });

  describe('mapStateToProps', () => {
    it('should pass auth object', () => {
      const fixture = {
        auth: {
          some: 'value',
        },
        repos: {
          data: ['value'],
        },
      }
      expect(mapStateToProps(fixture)).toMatchSnapshot();
    });
  });

  describe('mapDispatchToProps', () => {
    it('should handle onChange', () => {
      const dispatch = jest.fn();
      const dispatchedProps = mapDispatchToProps(dispatch);
      const fixture = {
        target: {
          value: 'something'
        }
      };
      dispatchedProps.onChange(fixture);
      expect(dispatch.mock.calls.length).toBe(1);
      expect(dispatch.mock.calls).toMatchSnapshot();
    });

    it('should handle onSubmit', () => {
      const dispatch = jest.fn();
      const preventDefault = jest.fn();
      const dispatchedProps = mapDispatchToProps(dispatch);
      const fixture = {
        preventDefault
      };
      dispatchedProps.onSubmit(fixture);
      expect(preventDefault.mock.calls.length).toBe(1);
      expect(dispatch.mock.calls.length).toBe(1);
      expect(dispatch.mock.calls).toMatchSnapshot();
    });

    it('should handle onClick', () => {
      const dispatch = jest.fn();
      const preventDefault = jest.fn();
      const dispatchedProps = mapDispatchToProps(dispatch);
      const fixture = {
        preventDefault
      };
      dispatchedProps.onClick(fixture);
      expect(preventDefault.mock.calls.length).toBe(1);
      expect(dispatch.mock.calls.length).toBe(4);
      expect(dispatch.mock.calls).toMatchSnapshot();
    });

    it('should handle onChangeRepo', () => {
      const dispatch = jest.fn();
      const dispatchedProps = mapDispatchToProps(dispatch);
      const fixture = {
        target: {
          value: 'something'
        }
      };
      dispatchedProps.onChangeRepo(fixture);
      expect(dispatch.mock.calls.length).toBe(1);
      expect(dispatch.mock.calls).toMatchSnapshot();
    });

  });

});
