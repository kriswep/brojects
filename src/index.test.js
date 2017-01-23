import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Index from './index.js';
import App from './containers/App';

describe('index', () => {
  it('renders without crashing', () => {
    expect(JSON.stringify(
      Object.assign({}, Index, {_reactInternalInstance: 'censored'})
      )).toMatchSnapshot();
  });
});