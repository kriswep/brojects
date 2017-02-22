import React from 'react';
// import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import 'react-mdl/extra/material.css';
import 'react-mdl/extra/css/material.indigo-pink.min.css';
import 'react-mdl/extra/material.js';

import { App, mapStateToProps, mapDispatchToProps } from './App';

describe('App', () => {
  describe('rendering', () => {
    it('renders without crashing', () => {      
      const wrapper = shallow(<App />);

    expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('renders a Layout with Header, Repo as Drawer, Content and Footer', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.find('Layout').length).toBe(1);
      expect(wrapper.find('Header').length).toBe(1);
      expect(wrapper.find('Repo').length).toBe(1);
      expect(wrapper.find('Content').length).toBe(1);
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
      const preventDefault = jest.fn();
      const dispatchedProps = mapDispatchToProps(dispatch);
      const fixture = {
        preventDefault,
        target: {
          id: 'repoId'
        }
      };
      dispatchedProps.onChangeRepo(fixture);
      expect(preventDefault.mock.calls.length).toBe(1);
      expect(dispatch.mock.calls.length).toBe(1);
      expect(dispatch.mock.calls).toMatchSnapshot();
    });

  });

});
